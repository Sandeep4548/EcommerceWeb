const express = require("express");
const router = express.Router();
const products = require("../models/productsSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

const authenicate = require("../middleware/authernticate");


// Get all products data
router.get("/getproducts", async (req, res) => {
  try {
    const productsData = await products.find();
    console.log(productsData+"Getting data");
    res.status(201).json(productsData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




// Register user
router.post("/register", async (req, res) => {
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    return res.status(422).json({ error: "Fill all details" });
  }

  try {
    const preuser = await User.findOne({ email: email });

    if (preuser) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const finaluser = new User({
        fname,
        email,
        mobile,
        password: hashedPassword,
        cpassword,
      });

      const storedata = await finaluser.save();
      console.log("User successfully added:", storedata);
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// login data
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
      res.status(400).json({ error: "fill the details" });
  }

  try {

      const userlogin = await User.findOne({ email: email });
      console.log(userlogin);
      if (userlogin) {
          const isMatch = await bcrypt.compare(password, userlogin.password);
          console.log(isMatch);



          if (!isMatch) {
              res.status(400).json({ error: "invalid crediential pass" });
          } else {
              
              const token = await userlogin.generatAuthtoken();
              console.log(token);

              res.cookie("Amazonweb", token, {
                  expires: new Date(Date.now() + 2589000),
                  httpOnly: true   
              });
              res.status(201).json(userlogin);
          }

      } else {
          res.status(400).json({ error: "user not exist" });
      }

  } catch (error) {
      res.status(400).json({ error: "invalid crediential pass" });
      console.log("error the bhai catch ma for login time" + error.message);
  }
});




// getindividual

router.get("/getproductsone/:id", async (req, res) => {

  try {
      const { id } = req.params;
      console.log(id);

      const individual = await products.findOne({ id: id });
      console.log(individual + "ind mila hai");

      res.status(201).json(individual);
  } catch (error) {
      res.status(400).json(error);
  }
});






// adding the data into cart
router.post("/addcart/:id", authenicate , async (req, res) => {

  try {
      console.log("perfect 6");
      const { id } = req.params;
      const cart = await products.findOne({ id: id });
      console.log(cart + "cart milta hain");

      const Usercontact = await User.findOne({ _id: req.userID });
      console.log(Usercontact + "user milta hain");


      if (Usercontact) {
          const cartData = await Usercontact.addcartdata(cart);

          await Usercontact.save();
          console.log(cartData + " thse save wait kr");
          console.log(Usercontact + "userjode save");
          res.status(201).json(Usercontact);
      }
  } catch (error) {
      console.log(error);
  }
});

// get data into the cart
router.get("/cartdetails", authenicate, async (req, res) => {
  try {
      const buyuser = await User.findOne({ _id:  req.userID });
      console.log(buyuser + "user hain buy pr");
      res.status(201).json(buyuser);
  } catch (error) {
      console.log(error + "error for buy now");
  }
});

//get valid user 
router.get("/validuser", authenicate, async (req, res) => {
  try {
      const validuserone = await User.findOne({ _id:  req.userID });
      console.log(validuserone + "user hain buy pr");
      res.status(201).json(validuserone);
  } catch (error) {
      console.log(error + "error for buy now");
  }
});

// remove iteam from the cart

router.get("/remove/:id", authenicate, async (req, res) => {
  try {
      const { id } = req.params;

      req.rootUser.carts = req.rootUser.carts.filter((curel) => {
          return curel.id != id
      });

      req.rootUser.save();
      res.status(201).json(req.rootUser);
      console.log("iteam remove");

  } catch (error) {
      console.log(error + "jwt provide then remove");
      res.status(400).json(error);
  }
});

//for user LOGOUT

router.get("/logout", authenicate, async (req, res) => {
  try {
      req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
          return curelem.token !== req.token
      });

      res.clearCookie("Amazonweb", { path: "/" });
      req.rootUser.save();
      res.status(201).json(req.rootUser.tokens);
      console.log("user logout");

  } catch (error) {
      console.log(error + "jwt provide then logout");
  }
});
module.exports = router;

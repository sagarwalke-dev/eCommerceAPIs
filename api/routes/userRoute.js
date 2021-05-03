const express = require("express");
const User = require("../controller/userController");
const router = express.Router();

router.post("/addUser", function (req, res, next) {
  User.addUser(
    req.body.name,
    req.body.email,
    req.body.contact,
    req.body.address,
    req.body.password
  )
    .then((data) => {
      // res.json(data);
      console.log("User account created");
      res.json({ userId: data.userId, status: "Account Created" });
    })
    .catch((err) => {
        console.log('failed to create user');
      res.json({ error: err });
    });
});

//login user
router.get("/login", function (req, res, next) {
  User.login(req.query.username)
    .then((data) => {
        console.log('user login success');
      if (req.query.password != data.userPassword)
        res.json({ username: req.query.username, status: "Failed to login" });
      else res.json({ username: req.query.username, status: "Login success" });
    })
    .catch((err) => {
        console.log('failed to login');
      res.json({ username: req.query.username, status: "User not exist" });
    });
});

//updateUser
router.put("/updateUser", function (req, res, next) {
  User.updateUser(
    req.body.name,
    req.body.email,
    req.body.contact,
    req.body.address,
    req.body.password
  )
    .then((data) => {
        console.log('user updated');
      if (data.nModified != 0)
        res.json({ username: req.body.email, status: "User updated" });
      else
        res.json({ username: req.body.email, status: "Failed to update user" });
    })
    .catch((err) => {
        console.log('failed to update user');
      res.json({ username: req.body.email, status: "User not exist" });
    });
});

//deleteUser
router.delete("/deleteUser", function (req, res, next) {
  User.deleteUser(req.body.email)
    .then((data) => {
      console.log('user deleted');
      if (data.deletedCount != 0)
        res.json({ username: req.body.email, status: "User deleted" });
      else
        res.json({ username: req.body.email, status: "Failed to delete user" });
    })
    .catch((err) => {
        console.log('failed to delete user');
      res.json({ username: req.body.email, status: "User not exist" });
    });
});

module.exports = router;

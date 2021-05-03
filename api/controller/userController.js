const User = require("../model/userModel");

//Add new user
let addUser = async (name, email, contact, address, password) => {
  try {
    return await new User({
      userName: name,
      userEmail: email,
      userContact: contact,
      userAddress: address,
      userPassword: password,
    }).save();
  } catch (err) {
    console.log("Failed to create user");
    throw err;
  }
};
let login = async (username, password) => {
  try {
    return await User.findOne({ userEmail: username });
  } catch (err) {
    console.log("Failed to login user");
    throw err;
  }
};

//update user details by email id
let updateUser = async (name, email, contact, address, password) => {
  try {
    return await User.updateOne(
      { userEmail: email },
      {
        userName: name,
        userContact: contact,
        userAddress: address,
        userPassword: password,
      }
    );
  } catch (err) {
    console.log("Failed to update user");
    throw err;
  }
};

//delete user by email
let deleteUser = async (email) => {
  try {
    return await User.deleteOne({ userEmail: email });
  } catch (err) {
    console.log("Failed to delete user");
    throw err;
  }
};
//export modules
module.exports = { addUser, login, updateUser, deleteUser };

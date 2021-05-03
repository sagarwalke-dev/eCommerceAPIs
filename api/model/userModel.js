const mongoose = require("mongoose");
const validator = require("validator");
const Database = require("../middleware/database");

//define schema for user
const UserSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: true,    
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
    unique: true,
    require:true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  userContact: {
    type: Number,
    minLength: 10,
    maxLength: 12,
  },
  userAddress: {
    type: String,
  },
  userPassword: {
    type: String,
    require: [true, "Please fill the password"],
    minLength: 6,
    maxLength: 16,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  accountStatus: {
    type: Boolean,
    default: false,
  },
});

UserSchema.plugin(Database.autoIncrement, { inc_field: "userId" });

//export user model
module.exports = mongoose.model("user", UserSchema);

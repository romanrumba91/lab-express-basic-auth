const mongoose = require("mongoose")

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String
});

// 3. MODEL
const User = mongoose.model("User", userSchema)

module.exports = User;

//import the methods
const { register } = require("../dal/Account.dao");

//map the register method
const userRegister = async ({ username, password, role }) => {
  //create an object
  const user = {
    username,
    password,
    role,
  };
  //call the register method and pass the created object
  return await register(user);
};

module.exports = { userRegister };

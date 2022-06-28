//require the mongodb connection created in index.js
const account = require("./index").db("AFFinalExam").collection("User");

//require the onjectID to access the documnets
const ObjcetID = require("mongodb").ObjectId;

//registration
const register = async ({ username, password, role }) => {
  const user = await account.insertOne({ username, password, role });
  return user;
};

//login
// const login = async({username,pwd})=>{
//     const user =

//     if(username === un && password === pwd){

//     }
// }

module.exports = { register };

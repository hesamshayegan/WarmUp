const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

const user =  {
              username: "testuser",
              };

const token = jwt.sign(user, SECRET_KEY);

console.log(user)
console.log(SECRET_KEY)
console.log(token);
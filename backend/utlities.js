const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "hduedhgwqhdwqdhuwqhdjwqndjwq", { expiresIn: "30d" });
};

module.exports = generateToken;

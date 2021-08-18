const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  let jwtToken = req.header("Authorization");
  if (!jwtToken) return res.status(400).send("Authorization denied: No token");
  //[Bearer,1245ashjdsuaidywdhckc]
  //    0              1
  jwtToken = jwtToken.split(" ")[1];
  if (!jwtToken) return res.status(400).send("Autorization denied: No token");
  console.log(jwtToken);

  try {
    const payload = await jwt.verify(jwtToken, process.env.SECRET_KEY_JWT);
    req.user = payload;
    next();
  } catch (e) {
    return res.status(400).send("Autorization denied: Invalid token");
  }
};

module.exports =  auth ;

const jwt = require ('jsonwebtoken')
const authConfig = require('../config/auth.json')
module.exports = (req, res, next)=>{
  const authHeader = req.headers.authorization;
  console.log(authHeader)
  if(!authHeader)
    return res.status(401).send({error: "token Invalido"})
  const parts = authHeader.split(' ');
  if (!parts.length === 2 )
    return res.status(401).send({error: "token Invalido 2"})
  const [scheme, token] = parts
  if(!/^Bearer$/i.test(scheme))
    return res.status(401).send({error: "token malformato"})

jwt.verify(token, authConfig.secret, (err, decoded)=> {
  if (err)
    return res.status(401).send({error: "token Invalido"})
  req.userId = decoded.id;
  return next();
})
}

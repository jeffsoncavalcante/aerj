const express = require("express");
const app = express();
const admin = require("./routes/admin")
const auth = require("./routes/auth")
//Rotas
app.use('/admin', admin)
app.use('/auth', auth )



app.listen(8010, function(){
  console.log("rodando");
});

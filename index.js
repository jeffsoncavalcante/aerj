const express = require("express");
const app = express();
const cors = require('cors');
const admin = require("./routes/post/admin")
const auth = require("./routes/post/auth")

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//Rotas
app.use('/admin', admin)
app.use('/auth', auth )



app.listen(8010, function(){
  console.log("rodando porta 8010");
});

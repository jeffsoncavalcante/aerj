const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
const Cadastro = require('../app/modell/Cadastro')
const authmiddlle = require('../app/middlle/auth')
router.use(authmiddlle)
router.post("/cadastro",function cadastro (req, res){
  Cadastro.create({
    nome_completo : req.body.nome_completo,
    cpf_user: req.body.cpf_user,
    rg_user: req.body.rg_user,
    d_nascimento: req.body.d_nascimento,
    nome_da_mae: req.body.nome_da_mae,
    nome_do_pai: req.body.nome_do_pai,
    cargo:req.body.cargo,
    email : req.body.email,
    senha: req.body.senha
  }).then(function(data){
    res.json(data)
  }).catch(function(erro){
    res.send("erro "+ erro)
  })
})


module.exports = router

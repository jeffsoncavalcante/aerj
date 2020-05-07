const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Cadastro = require('../../app/modell/insert/Cadastro');
const Fornecedor = require('../../app/modell/insert/fornecedor');
const Endereco = require('../../app/modell/insert/endereco');
const Instituicao = require('../../app/modell/insert/instituicao');
const Associacao = require('../../app/modell/insert/associacao');
const authmiddlle = require('../../app/middlle/auth')

//enviar json via json
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())


//usar token na pagina
router.use(authmiddlle)

// Rota de cadastro Inicio//
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
    res.json("erro "+ erro)
  })
})

// Rota de cadastro Fim//

// Rota de Associacao Inicio//
router.post("/associacao", function associacao (req, res){
  Associacao.create({
    nome_asso: req.body.nome_asso,
    cnpj_asso: req.body.cnpj_asso,
    insc_municipa_asso: req.body.insc_municipa_asso
  }).then(function(data){
    res.json("Sucesso"+data)
  }).catch(function(erro){
    res.json("Erro "+ erro)
  })
})
// Rota de Fornecedor Fim//



// Rota de Fornecedor Inicio//
router.post("/fornecedor", function fornecedor (req, res){
  Fornecedor.create({
    razao_social: req.body.razao_social,
    cnpj: req.body.cnpj,
    insc_municipal: req.body.insc_municipal,
    insc_estadual: req.body.insc_estadual
  }).then(function(data){
    res.json("Sucesso"+data)
  }).catch(function(erro){
    res.json("Erro "+ erro)
  })
})
// Rota de Fornecedor Fim//

//Rota de Instituicao Inicio//
router.post("/instituicao", function instituicao(req, res){
  Instituicao.create({
    nome_inst: req.body.nome_inst,
    semestre: req.body.semestre,
    curso: curso.body.curso
  }).then(function(data){
    res.json("Sucesso"+data)
  }).catch(function(erro){
    res.json("Erro "+ erro)
  })
})
// Rota de Instituicao Fim//

// Rota de Endereco Inicio //
router.post("/endereco",function endereco(req, res){
  Endereco.create({
    cidade: req.body.cidade,
    rua: req.body.rua,
    cep: req.body.cep,
    bairro: req.body.bairro,
    estado: req.body.estado
  }).then(function(data){
    res.json("Sucesso"+data)
  }).catch(function(erro){
    res.json("Erro "+ erro)
  })
})
// Rota de Endereco Fim //



//export route//
module.exports = router

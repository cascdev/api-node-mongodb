const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()

// Configurações do body-parser
app.use( bodyParser.urlencoded( { extended:true } ))
app.use( bodyParser.json() )

// Fazendo a coxexão com o BD mongo
mongoose.connect('mongodb://localhost:27017/alunos_api', {useNewUrlParser: true, useUnifiedTopology: true})


// Executando um teste - Persistindo um aluno no banco logo ao inicializar a api
const AlunoModel = mongoose.model('Aluno', { nome: String, matricula: String })

const novoAluno = new AlunoModel({ nome: "Alex Barros", matricula: "202002566945" })
	  
	  novoAluno.save() // Salva Aluno no banco
	  		   
// Abaixo está a declaração do Servidor - localhost:3000
const PORTA = 3000
app.listen( PORTA,  _ => console.log(`Express server rodando na porta ${PORTA}`) )
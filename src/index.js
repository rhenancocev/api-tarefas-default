const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))
const cors = require('cors')

app.get('/', (req, res) => {
  res.send('<h1>Olá mundo!</h1>')
})

const tarefaRouter = require('./routes/tarefaRouter')
app.use('/api/v1/tarefas', tarefaRouter)

const port = process.env.PORT
app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) })
const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()

app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello World!</h1>')
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Lucas Cupertino',
            email: 'lucas.csnas@gmail.com',
        },
        {
            name: 'Lucas Nascimento',
            email: 'lukinhas.csnas@gmail.com',
        },
    ]

    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    const user = UserModel.create(req.body)

    res.status(201).json(user)
})

const port = 8080

app.listen(port, () => console.log(`Rodando com Expressa na porta ${port}`))
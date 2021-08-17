const express = require('express')
const morgan = require('morgan')
const path = require('path')
const PORT = 8000

const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('*', (req,res) => {
    
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})
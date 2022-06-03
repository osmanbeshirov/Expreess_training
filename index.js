const express = require('express');
const res = require('express/lib/response');
const mysql = require('mysql');
const cors = require('cors')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'bootmcap'
})

connection.connect((err)=> {
    if(!err){
        console.log('Connected to MYSQL')
    }
})


const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req,res) => {
    res.send('Server is true !!!')
})


app.get('/users', (req,res) => {
    connection.query('SELECT * FROM users', (err, data)=> {

        if(!data){
            return res.status(400).send();
        }
        res.status(200).send(data)
    
    })

})


app.listen(3000, () => {
    console.log('Server started at 3000 port')
})
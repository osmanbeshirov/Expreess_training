const express = require('express');
const res = require('express/lib/response');
const mysql = require('mysql');


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


app.get('/', (req,res) => {
    connection.query('SELECT * FROM users', (err, data)=> {

        if(data){
            return res.send(data)
        }

    })

})




app.listen(3000, () => {
    console.log('Server started at 3000 port')
})
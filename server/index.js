//dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//run the server
app.listen(3002, ()=>{
    console.log('Server running on port 3002')
})

//create database(mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',//xampp password if set
    database: 'hcldb',
})

//router to server to register user
app.post('/register', (req, res)=>{
    //variables sent from form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //create SQL statement to insert the user to DataBase Table
    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'//WE Are going to enter these values through a variable
    const values = [sentEmail, sentUserName, sentPassword]

    //query to execute the sql statement stated above
    db.query(SQL, values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User Inserted Successfully!')
            res.send({message: 'User Added!'})

        }
    })

})

//login using existing credntials using another router
app.post('/login', (req, res)=>{
    //variables sent from form
    
    const sentloginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    //create SQL statement to insert the user to DataBase Table
    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'//WE Are going to enter these values through a variable
    const values = [sentloginUserName, sentLoginPassword]

    //query to execute the sql statement stated above
    db.query(SQL, values, (err, results)=>{
       if(err){
        res.send({error: err})
       }
       if(results.length > 0){
        res.send(results)
       }
       else{
        res.send({message: 'Credentails Do not Match!'})
       }
    })
})
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.static('build'));
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mysql"
})

app.get('/',(req, res) =>{
    const sql = "SELECT * FROM allusers"
    db.query(sql, (err,data)=> {
        if(err) return app.json("Error");
        return res.json(data);
    })
})

app.post('/create',(req,res)=>{
    const sql= "INSERT INTO allusers (`Name`, `Email`, `PhoneNo`, `Tag`, `City` , `State` , `Country` ) VALUES (?)";
    const values= [
        req.body.name,
        req.body.email,
        req.body.phoneNo,
        req.body.tag,
        req.body.city,
        req.body.state,
        req.body.country

    ]
    db.query(sql, [values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.put('/update/:id',(req,res)=>{
    const sql= "UPDATE allusers SET `Name`=? , `Email`=? , `PhoneNo`=? , `Tag`=?,  `City`=? , `State`=?,  `Country`=? WHERE ID=?";
    const values= [
        req.body.name,
        req.body.email,
        req.body.phoneNo,
        req.body.tag,
        req.body.city,
        req.body.state,
        req.body.country

    ]
    const id = req.params.id;

    db.query(sql, [...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/allusers/:id',(req,res)=>{
    const sql= "DELETE FROM allusers WHERE ID=?";
    const id = req.params.id;

    db.query(sql, [id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.listen(8083,()=>{
    console.log('listening on port 8083');
});
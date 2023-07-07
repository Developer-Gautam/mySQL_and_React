import express from 'express'
import mysql from "mysql"
import cors from "cors"


const app = express()

const db = mysql.createConnection({
    host : 'localhost',
    user : "root",
    password : "4988",
    database : "submission"
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.json("Hello this is the backend")
})

app.get("/submission", (req, res)=>{
    const q = "SELECT * FROM submissions;"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.post("/submission", (req, res) => {
    const q = "INSERT INTO submissions (`name`, `dob`,`country`,`resume`) VALUE (?)"
    const values = [
        req.body.name,
        req.body.dob,
        req.body.country,
        req.body.resume
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Successfully send Data")
    })
})

app.delete("/submisson/:id", (req, res) => {
    const submissionId = req.params.id
    const q = "DELETE FROM submissons WHERE id = ?"

    db.query(q, [submissionId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Submission has been deleted successfully")
    })
})


app.listen(8800, () => {
    console.log("Connected to backend !")
})

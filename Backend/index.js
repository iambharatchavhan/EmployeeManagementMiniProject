const cors = require('cors');
const express = require('express')
const app = express()
const connect = require('./config/database')
const employee = require('./routes/empRoutes')


require('dotenv').config()
const port = 3000 || 4000
app.use(cors());
app.use(express.json())




app.use('/api/v1/',employee)

app.get('/',(req,res) => {
    res.send("server is up and running")
})

app.listen(port,()=>{
    console.log(`app is running on port number ${port}`)
})

//Calling to database
connect();



const express = require('express')
const app = express()
const port = process.env.PORT||3000
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/html/index.html'))

var obj = {}
obj.name = "Tadepalli Venkata Sai Chakradhar";
obj.college = "CMR College Of Engineering & Technology";
obj.rollno = "17H51A04P4";

app.get('/data',(req,res) => res.json(obj))
app.get('/resume',(req,res) => res.sendFile(__dirname + '/public/html/resume.html'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
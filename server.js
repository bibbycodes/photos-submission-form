const express = require('express')
const PORT = process.env.HTTP_PORT || 5000;
const app = express()
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser')
const dbConn = require('./models/dbConn')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/home', (req, res) => {
  res.json({message : 'Express Template'})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})

app.post('/new_image', (req, res) => {
  console.log(req.body)
  let request = req.body
  let db = new dbConn()
  let queryString = 
    `INSERT INTO users 
    (first_name, last_name, instagram_handle, description, email, hashtags, filepath)
    VALUES ('${request.first_name}', '${request.last_name}', '${request.instagram_handle}', '${request.description}', '${request.email}', '${request.hashtags}', '${request.file_path}')
    RETURNING *
    `
  let response = db.query(queryString)
  res.send(response)
})

module.exports = app
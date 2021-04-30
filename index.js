const express = require('express');
const json = require('./data.json')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/test', (req, res) => {
	res.status(201)
	res.set("Access-Control-Allow-Origin", req.query.name)
	res.json(json)
});

app.get('/', (req, res) => {
	res.redirect('https://eximstudio.com')
})

app.listen(3000, () => {
  console.log('server started');
});
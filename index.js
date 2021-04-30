const express = require('express');
const json = require('./data.json')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/test', (req, res) => {
	res.status(201)
	res.set("Access-Control-Allow-Origin", req.query.name)
  res.json(json)
	console.log(req.query.name)
});

app.post('/refresh', async (req, res) => {
	console.log("repl.deploy" + JSON.stringify(req.body) + req.get("Signature"))

	process.stdin.on('data', (data) => {
		let body = JSON.parse(data)
		res.status(body.status).end(body.body)
	})
})

app.get('/', (req, res) => {
	// res.redirect('https://eximstudio.com')
})

app.listen(3000, () => {
  console.log('server started');
});
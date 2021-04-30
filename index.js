const express = require('express');
const json = require('./data.json')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/test', (req, res) => {
	res.status(201)
	res.set("Access-Control-Allow-Origin", req.query.name)
  res.json(json)
	console.log(req.query.name)
});

app.get('/', (req, res) => {
	// res.redirect('https://eximstudio.com')
})

app.listen(3000, () => {
  console.log('server started');
});
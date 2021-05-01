const express = require('express');
const json = require('./data.json')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/test', (req, res) => {
	res.status(201)
	res.set("Access-Control-Allow-Origin", req.query.name)
	res.json(json)
});

app.post('/restart/'+process.env.TOKEN, (req, res) => {
		res.sendStatus(200)
		process.exit(2)
})

app.get('/', (req, res) => {
	res.redirect('https://eximstudio.com')
})

app.listen(4000, () => {
  console.log('server started');
});
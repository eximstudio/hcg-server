const json = require("./data.json")

module.exports = (req, res) => {
	res.status(201)
	res.set("Access-Control-Allow-Origin", req.query.origin)
	res.json(json)
}

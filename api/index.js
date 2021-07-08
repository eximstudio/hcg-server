// const json = require("./data.json")

let json =[
    {
        "name": "C",
        "uid": "1111",
        "targets": [
            {
                "ref": "1112",
                "type": "single"
            },
            {
                "ref": "1113",
                "type": "single"
            },
            {
                "ref": "1114",
                "type": "triple"
            },
            {
                "ref": "1115",
                "type": "double"
            }
        ],
        "color": "rgb(255, 0, 0)",
        "radius": 0.3,
        "position": [
            0,
            0,
            0
        ]
    },
    {
        "name": "H",
        "uid": "1112",
        "targets": [
            {
                "ref": "1111",
                "type": "single"
            }
        ],
        "color": "rgb(255, 0, 0)",
        "radius": 0.2,
        "position": [
            0,
            0.5,
            1.5
        ]
    },
    {
        "name": "H",
        "uid": "1113",
        "targets": [
            {
                "ref": "1111",
                "type": "single"
            }
        ],
        "color": "rgb(255, 0, 0)",
        "radius": 0.2,
        "position": [
            0,
            1,
            0
        ]
    },
    {
        "name": "H",
        "uid": "1114",
        "targets": [
            {
                "ref": "1111",
                "type": "triple"
            }
        ],
        "color": "rgb(255, 0, 0)",
        "radius": 0.2,
        "position": [
            1,
            0,
            0
        ]
    },
    {
        "name": "H",
        "uid": "1115",
        "targets": [
            {
                "ref": "1111",
                "type": "double"
            }
        ],
        "color": "rgb(255, 0, 0)",
        "radius": 0.2,
        "position": [
            1,
            0,
            1
        ]
    }
]


module.exports = (req, res) => {
	res.status(201)
	res.setHeader("Access-Control-Allow-Origin", req.query.origin)
	res.json(json)
}

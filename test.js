const { assert } = require("chai");
const groupByParams = require("./index");

const fixtures = [
	{
		name: "Bob",
		age: 25,
		language: {
			english: true,
			spanish: true,
			russian: false
		}
	},
	{
		name: "Helen",
		age: 30,
		language: {
			english: true,
			spanish: false,
			russian: false
		}
	},
	{
		name: "Megan",
		age: 25,
		language: {
			english: true,
			spanish: false,
			russian: true
		}
	},
	{
		name: "Megan",
		age: 29,
		language: {
			english: false,
			spanish: false,
			russian: true
		}
	}
];

describe("group-by-params", function() {
	describe("it should group by", function() {

		it("one param", function() {
			let expected = [
			    {
			        "params": {
			            "age": 25
			        },
			        "values": [
			            {
			                "name": "Bob",
			                "age": 25,
			                "language": {
			                    "english": true,
			                    "spanish": true,
			                    "russian": false
			                }
			            },
			            {
			                "name": "Megan",
			                "age": 25,
			                "language": {
			                    "english": true,
			                    "spanish": false,
			                    "russian": true
			                }
			            }
			        ]
			    },
			    {
			        "params": {
			            "age": 29
			        },
			        "values": [
			            {
			                "name": "Megan",
			                "age": 29,
			                "language": {
			                    "english": false,
			                    "spanish": false,
			                    "russian": true
			                }
			            }
			        ]
			    },
			    {
			        "params": {
			            "age": 30
			        },
			        "values": [
			            {
			                "name": "Helen",
			                "age": 30,
			                "language": {
			                    "english": true,
			                    "spanish": false,
			                    "russian": false
			                }
			            }
			        ]
			    }
			];

			let output = groupByParams(fixtures, "age");

			assert.deepEqual(output, expected);
		});

		it("multi params", function() {
			let expected = [
			    {
			        "params": {
			            "name": "Bob",
			            "age": 25
			        },
			        "values": [
			            {
			                "name": "Bob",
			                "age": 25,
			                "language": {
			                    "english": true,
			                    "spanish": true,
			                    "russian": false
			                }
			            }
			        ]
			    },
			    {
			        "params": {
			            "name": "Helen",
			            "age": 30
			        },
			        "values": [
			            {
			                "name": "Helen",
			                "age": 30,
			                "language": {
			                    "english": true,
			                    "spanish": false,
			                    "russian": false
			                }
			            }
			        ]
			    },
			    {
			        "params": {
			            "name": "Megan",
			            "age": 25
			        },
			        "values": [
			            {
			                "name": "Megan",
			                "age": 25,
			                "language": {
			                    "english": true,
			                    "spanish": false,
			                    "russian": true
			                }
			            }
			        ]
			    },
			    {
			        "params": {
			            "name": "Megan",
			            "age": 29
			        },
			        "values": [
			            {
			                "name": "Megan",
			                "age": 29,
			                "language": {
			                    "english": false,
			                    "spanish": false,
			                    "russian": true
			                }
			            }
			        ]
			    }
			];

			let output = groupByParams(fixtures, "name", "age");

			assert.deepEqual(output, expected);
		});

		it("nested params", function() {
			let expected = [
			    {
			        "params": {
			            "language.english": true,
			            "language.russian": false
			        },
			        "values": [
			            {
			                "name": "Bob",
			                "age": 25,
			                "language": {
			                    "english": true,
			                    "spanish": true,
			                    "russian": false
			                }
			            },
			            {
			                "name": "Helen",
			                "age": 30,
			                "language": {
			                    "english": true,
			                    "spanish": false,
			                    "russian": false
			                }
			            }
			        ]
			    },
			    {
			        "params": {
			            "language.english": true,
			            "language.russian": true
			        },
			        "values": [
			            {
			                "name": "Megan",
			                "age": 25,
			                "language": {
			                    "english": true,
			                    "spanish": false,
			                    "russian": true
			                }
			            }
			        ]
			    },
			    {
			        "params": {
			            "language.english": false,
			            "language.russian": true
			        },
			        "values": [
			            {
			                "name": "Megan",
			                "age": 29,
			                "language": {
			                    "english": false,
			                    "spanish": false,
			                    "russian": true
			                }
			            }
			        ]
			    }
			];

			let output = groupByParams(fixtures, "language.english", "language.russian");

			assert.deepEqual(output, expected);
		});
	});
});
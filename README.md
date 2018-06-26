# group-by-params
Simple grouping function for used by array which execute grouping by params.

Parameters can be either object keys or nested paths.

# Install

```sh
npm install group-by-params
```

# Usage

## groupByParams(array, ...props);

*array* - input array.
*...props* - props list for grouping;

### One param

Input:
```js
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
```

Invoke:
```js
let output = groupByParams(fixtures, "age")
```

Output:
```js
[
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
]
```

### One param

Input:
```js
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
```

Invoke:
```js
let output = groupByParams(fixtures, "age")
```

Output:
```js
[
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
]
```

### Multi param

Input:
```js
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
```

Invoke:
```js
let output = groupByParams(fixtures, "name", "age")
```

Output:
```js
[
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
]
```

### Nested params

Input:
```js
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
```

Invoke:
```js
let output = groupByParams(fixtures, "language.english", "language.russian");

```

Output:
```js
[
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
]
```
# License

MIT © nlapshin


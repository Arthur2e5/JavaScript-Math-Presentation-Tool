var config = {
	"inputs": {
		"function": {
			"name": "Function",
			"type": "text",
			"placeholder": "Valid math expression f(x), assuming f(x) = 0"
		},
		"directive": {
			"name": "Directive",
			"type": "text",
			"placeholder": "The directive f'(x)"
		},
		"precision": {
			"name": "Precision",
			"type": "number",
			"placeholder": "How precise you want it to be"
		},
		"initial": {
			"name": "Iteration initial",
			"type": "number",
			"placeholder": "The very first value for iteration"
		},
		"min": {
			"name": "Minimum",
			"type": "number",
			"placeholder": "The lowest limit of solution range"
		},
		"max": {
			"name": "Maximum",
			"type": "number",
			"placeholder": "The highest limit of solution range"
		},
		"maxi": {
			"name": "Max iteration times",
			"type": "number",
			"placeholder": "How much time you want to iterate if didn't found a solution"
		}
	},
	"profiles": {
		"bisection": {
			"name": "Bisection",
			"input": ["function", "precision", "min", "max"]
		},
		"iteration": {
			"name": "Iteration",
			"input": ["function", "precision", "initial", "maxi"]
		},
		"newton": {
			"name": "Newton Method",
			"input": ["function", "directive", "precision", "initial", "maxi"]
		}
	}
};
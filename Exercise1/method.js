result = function(a,b,operation) {

	switch(operation) {
		case "sum":
					return a+b;
		case "sub":
					return a-b;
		case "mul":
					return a*b;
		case "div":
					return a/b;
	}
}

module.exports = result
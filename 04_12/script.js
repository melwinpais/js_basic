function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);


function sum() {
	var a = 3, b = 4;
	function sumFunc() {
		var sum = a + b;
		console.log(a + " + " + b + " = " + sum);
		return sum;
	};
	return sumFunc;
}

var result = sum();
console.log(result);
console.log(result());

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var sum  = document.getElementById("sum");

function add() {
	var n1 = parseFloat(num1.value) || 0;
	var n2 = parseFloat(num2.value) || 0;
	var n3 = n1+n2;
	sum.innerHTML = "Sum = " + n3
}

num1.addEventListener("input",add);
num2.addEventListener("input",add);
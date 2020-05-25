var file1 = document.getElementById('file1');
var file2 = document.getElementById('file2');
var preview1  = document.getElementById("preview1");
var preview2  = document.getElementById("preview2");

function readSingleFile(e, preview) {
	var file = e.target.files[0];
	if (!file) {
		return;
	}

	var reader = new FileReader();
	reader.onload = function(e) {
		preview.textContent = e.target.result;
	}
	reader.readAsText(file);	
}

function readFileOne(e) {
	readSingleFile(e, preview1);
}

function readFileTwo(e) {
	readSingleFile(e, preview2);
}

file1.addEventListener("change",readFileOne,false);
file2.addEventListener("change",readFileTwo,false);
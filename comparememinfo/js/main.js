var meminfo = document.getElementById('meminfo');

function getFileContents(filename, resolve) {
	let request = new XMLHttpRequest();
	request.open('GET',filename);
	request.responseType = 'text';
	request.onload = function() {
		
		// meminfo.innerText = contents;
		// var lines = contents.split('\n');
		// console.log(lines[0]);
		// var words = lines[0].split(' ');
		// for (var i = words.length - 1; i >= 0; i--) {
		// 	console.log(words[i]);
		// }
		// meminfo.innerText = request.response;	
		resolve(request.response)
	}
	request.send();
	
	// setTimeout(getFileContents, 2000);
}

let getFirstFile = new Promise(function(resolve, reject) {
	getFileContents("meminfo1", resolve);
});

let getSecondFile = new Promise(function(resolve, reject) {
	getFileContents("meminfo2", resolve);
});

async function loadFiles() {
	let contents1 = await getFirstFile
	let contents2 = await getSecondFile
	var lines1 = contents1.split("\n")
	var lines2 = contents2.split("\n")
	var resultContents = "  File#1	                    File#2                  	 Diff\n";

	for (var i = 0; i < lines1.length; i++) {
		var l1 = lines1[i];
		var l2 = lines2[i];
		var words1 = l1.split(' ');
		var words2 = l2.split(' ');
		var s1 = words1[words1.length-2];
		var s2 = words2[words2.length-2];
		var d = parseFloat(s1) - parseFloat(s2);

		resultContents += l1 + "\t" + l2 + "\t Diff : " + d + "\n";
	}

	meminfo.innerText = resultContents;
}

loadFiles();

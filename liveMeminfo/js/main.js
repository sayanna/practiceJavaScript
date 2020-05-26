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

async function loadFiles() {
	let contents = await getFirstFile
	meminfo.innerText = contents;
}

loadFiles();

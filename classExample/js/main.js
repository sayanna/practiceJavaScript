var line = "am_pss "
var lineParsers = get_line_parsers()

for (var i=0; i<lineParsers.length; ++i) {
	lineParsers[i].parseLine(line)
}

for (var i=0; i<lineParsers.length; ++i) {
	console.log(lineParsers[i].getReport());
}
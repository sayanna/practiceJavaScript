var lineParsers = []

class LineParser {
	constructor() {
		this.report = {}
	}

	parseLine(line) {
		return false;
	}

	getReport() {
		return this.report;
	}
}

function register_line_parser(lineParser) {
	lineParsers.push(lineParser)
}

function get_line_parsers() {
	return lineParsers;
}
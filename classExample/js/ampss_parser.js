class AmPssLineParser extends LineParser {
	parseLine(line) {
		if (line.includes("am_pss")) {
			this.report["app"] = 500
			return true;
		}
	}
}

var ampss = new AmPssLineParser()
register_line_parser(ampss)
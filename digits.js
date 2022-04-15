function sevenSegments(shift) {
	this.seg = [];
	this.create = function () {
		push();
		stroke(0);
		noFill();
		// A
		this.seg[6] = new segment(40, 20, 100, 20, shift);
		// B
		this.seg[5] = new segment(140, 40, 20, 100, shift);
		// C
		this.seg[4] = new segment(140, 160, 20, 100, shift);
		// D
		this.seg[3] = new segment(40, 260, 100, 20, shift);
		// E
		this.seg[2] = new segment(20, 160, 20, 100, shift);
		// F
		this.seg[1] = new segment(20, 40, 20, 100, shift);
		// G
		this.seg[0] = new segment(40, 140, 100, 20, shift);
		pop();
	};
	this.showNumber = function (val) {
		for (let i = 0; i <= 6; i++) {
			this.seg[i].empty();
			this.seg[i].fill(val, i);
		}
	};
}

function segment(x, y, x1, y1, shift) {
	this.empty = function () {
		fill(bgc);
		rect(x + shift, y, x1, y1, 10);
	};
	this.fill = function (num, seg) {
		fill(getColor(num, seg));
		rect(x + shift, y, x1, y1, 10);
	};
}

function digits(dig) {
	let x = 0;
	for (let i = 0; i < dig; i++) {
		if (i != 0) {
			x += 160;
			if (i % 2 == 0) x += 50;
		}
		digit[i] = new sevenSegments(x);
	}
}

function getColor(val, shift) {
	let r = 255;
	let g = 0;
	let b = 0;
	let a = 255 * ((val >> shift) & 1);
	return color(r, g, b, a);
}

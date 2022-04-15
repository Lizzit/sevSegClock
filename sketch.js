let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
let digit = [];
let digNum = 6;
let bgc;
let input;

function setup() {
	createCanvas(innerWidth - 5, innerHeight - 5);
	input = createInput();
	input.position(30, 350);
	input.size(60, 30);
	input.style("font-size", "25px");
	input.attribute("maxlength", 3);
	input.value(51);
	digits(digNum);
	for (let i = 0; i < digNum; i++) {
		digit[i].create();
	}
}

function draw() {
	bgc = input.value();
	if (bgc == "") bgc = 0;
	else bgc = int(input.value());
	document.getElementById("body").style.background = color(bgc);
	background(bgc);
	fill(255, 0, 0);
	circle(355, 210, 20);
	circle(355, 90, 20);
	circle(725, 210, 20);
	circle(725, 90, 20);
	digit[5].showNumber(nums[second() % 10]);
	digit[4].showNumber(nums[floor(second() / 10)]);
	digit[3].showNumber(nums[minute() % 10]);
	digit[2].showNumber(nums[floor(minute() / 10)]);
	digit[1].showNumber(nums[hour() % 10]);
	digit[0].showNumber(nums[floor(hour() / 10)]);
}

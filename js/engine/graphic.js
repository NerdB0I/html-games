// A simple way to edit the canvas

// Vars
let canvas;
let cw;
let ch;
let ctx;
let px = 1;
let cscreen;
let screen;

// Functions
let screenupdate = (x=0, y=0, colorvalue="#FFF", id=null) => {
	if (!cscreen) { cscreen = [] };
	if (!cscreen[y]) { cscreen[y] = [] };
	cscreen[y][x] = colorvalue;
	if (id !== null) {
		if (!screen) { screen = [] };
		if (!screen[Math.floor(y/px)]) { screen[Math.floor(y/px)] = [] };
		screen[Math.floor(y/px)][Math.floor(x/px)] = id;
	}
}
let newCanvas = (id='') => {
	canvas = document.getElementById(id);
	cw = canvas.width;
	ch = canvas.height;
	ctx = canvas.getContext("2d");
	console.log(`${cw}, ${ch}`)
}
let newPx = (value=1) => {
	px = Math.abs(Math.floor(value)); 
}
let pixel = (x=0, y=0, color="", id=null) => {
	//if (!ctx) { return }
	ctx.fillStyle = color;
	ctx.fillRect(x*px, y*px, px, px);
	screenupdate(x, y, color, id);
}
let stringtosprite = (string) => {
	const items = string.split(',', 256);
	let code = []
	let z = 0;
	for (let h=0;h<16;h++) {
		for (let w=0;w<16;w++) {
			if (!code[h]) { code[h] = [] }
			code[h][w] = items[z];
			z++;
		}
	}
	return code;
}
let sprite = (x=0, y=0, code=[], id=null, width=16, height=16) => {
	if (typeof(code) == "string") {
		sprite(x, y, stringtosprite(code), id, width, height);
		return;
	}
	width = Math.floor(width/16)*16;
	height = Math.floor(height/16)*16;
	for (let sh=0;sh<height;sh++) {
		for (let sw=0;sw<width;sw++) {
			pixel(x+sw, y+sh, code[sh][sw], id);
		}
	}
}

// Export
export { newCanvas, newPx, pixel, sprite, /*reloadscreen,*/ screen, cscreen }
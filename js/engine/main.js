// Imports
import *  as Storage from "./storage.js";
import *  as Input from "./input.js";
import *  as Graphic from "./graphic.js";

Graphic.newCanvas("gamecanvas");
Graphic.newPx(16);
Graphic.pixel(1,1,"#000");

let mysprite = [
	["#000", "#000", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#000", "#000"],
	["#000", "#FFF", "#FFF", "#000", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#000", "#FFF", "#FFF", "#000"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#000", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#000", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#FFF", "#000", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#000", "#FFF"],
	["#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
	["#000", "#FFF", "#FFF", "#000", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#000", "#FFF", "#FFF", "#000"],
	["#000", "#000", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#FFF", "#000", "#000"]
]

Graphic.sprite(0, 0, mysprite, "THE SPRITE");
console.log(Graphic.cscreen.toString());
console.log(Graphic.screen.toString());
//Graphic.reloadscreen();
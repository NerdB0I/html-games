// SIMPLE STORAGE FUNCTIONS

// Vars
let ls = window.localStorage;

// Functions
let KeyExists = (key="") => {
	if (ls.getItem(key) != null) {
		return true;
	} else {
		return false;
	}
}
let SET = (key="", val=null) => {
	ls.setItem(key, val);
}
let GET = (key="", def=null) => {
	if (KeyExists(key)) {
		return ls.getItem(key);
	} else {
		return def;
	}
}
let DEL = (key="") => {
	if (KeyExists(key)) { 
		ls.removeItem(key); 
	}
}

// Export
export { SET, GET, DEL };
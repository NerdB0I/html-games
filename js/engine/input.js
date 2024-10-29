// SIMPLE INPUT READER

// Vars
let callbacks = {};

// Functions
window.addEventListener("keydown", (event) => {
	if (callbacks[event.key]) {
		let callback = callbacks[event.key];
		callback();
	} else console.log(`No callback for ${event.key} key.`)
})

// Export
export { callbacks }
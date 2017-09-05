"use strict";
window.sjm = {

	// reference to the Phaser.Game instance
	game: null,

	// main function
	main: function(){
		// const docElement = document.documentElement
    // const width = docElement.clientWidth
    // const height = docElement.clientHeight
		this.game = new Phaser.Game(mt.data.map.viewportWidth, mt.data.map.viewportHeight, Phaser.AUTO, document.body, window.sjm.state.boot);
	},

	// here we will store all states
	state: {}
};

window.addEventListener('DOMContentLoaded', function(){
	window.sjm.main();
}, false);

export default {}

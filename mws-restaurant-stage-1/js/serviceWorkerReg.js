"use strict";

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceWorker.js')
	.then(function() {
		// Registration was a success
		console.log('Registration worked!');
	})
	.catch(function() {
		// Registration was a failure
		console.log('Registration failed!');
	});
}
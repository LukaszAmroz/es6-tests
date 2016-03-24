(function(){
	"use strict";

	function getNumberFacts(url){
		return new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4){
					if(xhr.status === 200){
						resolve(xhr.responseText);
					} else {
						reject(xhr.status);
					}
				}
			}
			xhr.send();
		});
	}

	getNumberFacts("http://numbersapi.com/random")
		.then(
			data => console.log(data),
			error => console.log(error)
		);
	
}());

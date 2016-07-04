var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(err, list){
	var filtered = [];
	for (var i = 0; i < list.length; i++){
		if(path.extname(list[i]) === ("." + process.argv[3])){
			filtered.push(list[i]);
		}; 		
	};
	console.log(filtered.join("\n"));
});
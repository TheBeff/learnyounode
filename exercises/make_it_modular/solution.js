var filter = require('./modz.js');
var dirName = process.argv[2];
var ext = process.argv[3];


filter(dirName, ext, function(err, list){
	if(err)
		return console.error("WOOPS:", err);
	list.forEach(function(file){
		console.log(file);
	});
});
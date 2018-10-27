var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hello There, welcome to the first Page!!");
});

app.get("/speak/:animal", function(req, res){
	var voices = {
		pig: "OINK",
		cow: "MOO",
		dog: "WOOF WOOF"
	}
	var animal = req.params.animal;
	var sound = voices[animal];
	res.send(sound);
});

app.get("/repeat/:word/:num", function(req, res){
	var word = req.params.word;
	var num = Number(req.params.num);
	var sentence = "";
	for (var i = 0; i <=num ; i++) {
		sentence += word+" ";
	}
	res.send(sentence);
});

app.get("*", function(req, res){
	res.send("No such page exists.... you sure you typed it right?");
});

app.listen(3000, function(){
	console.log("Server has started");
});
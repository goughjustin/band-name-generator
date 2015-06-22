'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');

var getRandomWord = require('./lib/getrandomword.js');
var app = express();
var port = process.env.PORT || 3000;
//create .js file for Verb, Noun, postRandomword

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));



var Verb = function() {
  this.fast = true;
  this.slow = true;
  this.running = true;
  this.swing = true;
};

var Noun = function() {
  this.cat = true;
  this.dog = true;
  this.house = true;
  this.chair = true;
};


var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

function postRandomWord(word, object) {
  //if the work doesn't exist already
  //if the word does exist

  //check if the word exists
  if (object.hasOwnProperty(word)) {
    //if the word doesnt exist, add it as a property to that object,
    // and send a message back thanking them for their word

    return {msg: 'Thanks for trying! We already have ' + word + '!'};
  } else {
    object[word] = true;
    //if the word does exist, then send a nice message back
    return {msg: 'Thanks for submitting your awsome work. ' + word + '!'};
  };

}




app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res){
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res){
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res){
  res.json(getRandomWord(noun));
});

app.post('/adjective', function(req, res) {
  console.log(req.body);
  var word = postRandomWord(req.body.word, adjective);
  res.json(word);
})

app.listen(port, function() {
  console.log('server available at http://localhost:' + port);
});

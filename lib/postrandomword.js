'use strict';


module.exports = function postRandomWord(word, object) {
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

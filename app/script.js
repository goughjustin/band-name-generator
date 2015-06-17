"use strict";

$(function() {

  $("#name").on("click", function() {
    $.get("http://localhost:3000/adjective", function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
  });
  });

  $("#name").on("click", function() {
    $.get("http://localhost:3000/verb", function(response) {
      var verb = response.word;
      $("#verb").text(verb);
  });
  });

  $("#name").on("click", function() {
    $.get("http://localhost:3000/noun", function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });
  });

 $("#submitWords").on("submit", function(e) {
    e.preventDefault();

    var adjective = $("input[name=adjective]").val();
    var adjPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }
  });
});


"use strict";

const Bob = function() {};

Bob.prototype.hey = function(input) {
  switch(input.slice(-1)){
    case "!":
      return "Whoa, chill out!";
    default:
      return "Whatever."
  }
};

module.exports = Bob;

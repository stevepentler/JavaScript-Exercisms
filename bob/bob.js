"use strict";

const Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.slice(-1) === "?") {
    return "Sure."
  } else if (input === input.toUpperCase()) {
    return "Whoa, chill out!"
  } else {
    return "Whatever."
  }
};

module.exports = Bob;

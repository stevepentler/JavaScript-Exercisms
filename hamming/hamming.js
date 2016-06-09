"use strict";

function Hamming() {};

Hamming.prototype = {
  compute: function(string1, string2) {
    let difference = 0
    Array.from(string1).forEach(function(char, index) {
      if (char !== Array.from(string2)[index]) {
        difference += 1
      }
    })
    return difference
  }
}



module.exports = Hamming;
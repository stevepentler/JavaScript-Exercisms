"use strict";

function Hamming() {};

Hamming.prototype = {
  compute: function(string1, string2) {
    if (string1.length === string2.length) {
      return compareString(string1, string2)
    } else {
      throw new Error('DNA strands must be of equal length.')
    }
  }
}

function compareString(string1, string2) {
  let difference = 0
  Array.from(string1).forEach(function(char, index) {
    if (char !== Array.from(string2)[index]) {
      difference += 1
    }
  })
  return difference
}

module.exports = Hamming;
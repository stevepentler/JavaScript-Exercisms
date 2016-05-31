"use strict";

function Words() {

  this.tally = {};

  this.count = function(phrase) {
    var words_array = phrase.split(" ");
    words_array.forEach(word, index) {
      var word = word.downcase;
      if (this.tally.word) {
        return this.tally.word += 1;
      } else {
        return this.tally.word = 1;
      }
    }
  }
}

module.exports = Words
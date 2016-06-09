"use strict";

function DnaTranscriber() {
  this.translations = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  }
};

DnaTranscriber.prototype = {


  toRna: function(strand) {
    return strand.split("").map(this.translate.bind(this)).join("");
  },

  translate: function(nucleotide) {
    return this.translations[nucleotide];
  }
}

module.exports = DnaTranscriber;
"use strict";

function DnaTranscriber() {
  this.translations = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  }
};

DnaTranscriber.prototype = {
  toRna: function(nucleotide) {
    return this.translations[nucleotide];
  }
}

module.exports = DnaTranscriber;
"use strict";
function Capitalize(word, sep = " ", join = " ") {
    const long_word = word.split(sep);
    if (word.trim() === "") {
        return "";
    }
    if (word.length === 1) {
        return word.toUpperCase();
    }
    if (long_word.length === 1) {
        const sentence = long_word[0];
        return (
            sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
        );
    }
    return long_word
        .filter((v) => !!v.trim())
        .map(
            (sentence) =>
                sentence.charAt(0).toUpperCase() +
                sentence.slice(1).toLowerCase()
        )
        .join(join);
}
module.exports = Capitalize;

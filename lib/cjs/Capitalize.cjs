function Capitalize(word, sep, join) {
    sep ??= " ";
    join ??= " ";
    const long_word = word.split(sep);
    if (
        [sep, word, join].some((v) => typeof v !== "string")
    ) {
        throw new Error("args must be string");
    }
    if (word.trim() === "") {
        throw new Error("word must contain some letters");
    }
    if (word.length === 1) {
        return word.toUpperCase();
    }
    if (long_word.length === 1) {
        const sentence = long_word[0];
        return (
            sentence.charAt(0).toUpperCase() +
            sentence.slice(1).toLowerCase()
        );
    }
    return long_word
        .map(
            (sentence) =>
                sentence.charAt(0).toUpperCase() +
                sentence.slice(1).toLowerCase()
        )
        .join(join);
}
module.exports = Capitalize;

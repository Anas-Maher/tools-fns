const RandomString = (length) => {
    let Chars = [
        "!",
        "#",
        "&",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "?",
        "_",
        "a",
        "b",
        "e",
        "h",
        "i",
        "m",
        "n",
        "r",
        "s",
    ];
    if (typeof length !== "number")
        throw new Error("length must be type number");
    length = Math.floor(Math.abs(length));
    if (length < 8)
        throw new Error("password length must be at 8");
    let Password = "";
    for (let i = 1; i <= length; i++) {
        const rand = Math.floor(
            Math.random() * Chars.length
        );
        Password += Chars[rand];
    }
    return Password;
};
module.exports = RandomString;

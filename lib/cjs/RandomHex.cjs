"use strict";
const RandomHex = () => {
    const Digits = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];
    let Color = "#";
    for (let i = 0; i < 6; i++) {
        const expression = Digits.length * Math.random();
        const rand = Math.floor(expression);
        Color += Digits[rand];
    }
    return Color;
};
module.exports = RandomHex;

"use strict";

function NumbersSort(arr, order) {
    switch (order) {
        default:
        case "ASC":
            return arr.toSorted((a, b) => a - b);
        case "DESC":
            return arr.toSorted((a, b) => b - a);
    }
}
module.exports = NumbersSort;

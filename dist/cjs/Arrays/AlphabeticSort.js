"use strict";

function AlphabeticSort(arr, order) {
    switch (order) {
        default:
        case "ASC":
            return arr.toSorted((a, b) => a.localeCompare(b));
        case "DESC":
            return arr.toSorted((a, b) => b.localeCompare(a));
    }
}
module.exports = AlphabeticSort;

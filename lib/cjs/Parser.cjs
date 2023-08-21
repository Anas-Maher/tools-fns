"use strict";

const Stringify = require("./Stringify.cjs");
const Parser = (obj) => {
    return JSON.parse((0, Stringify.default)(obj), (_, value) => {
        if (Array.isArray(value)) return new Set(value);
        if (value != null && typeof value === "object")
            return new Map(Object.entries(value));
        return value;
    });
};
module.exports = Parser;

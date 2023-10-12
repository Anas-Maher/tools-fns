"use strict";
const Stringify = function (obj) {
    return JSON.stringify(
        obj,
        (_, value) => {
            if (value instanceof Map) {
                const result = [];
                value.forEach((_, key) => {
                    if (typeof key !== "string") {
                        result.push(false);
                    }
                });
                if (!result.includes(false)) {
                    return Object.fromEntries(value);
                }
                throw new Error("Map Keys Should Be a String To Be Converted");
            }
            if (value instanceof Set) return Array.from(value);
            return value;
        },
        2
    );
};
module.exports = Stringify;

"use strict";

const _1 = require("./");
function Deserialize(obj) {
    return JSON.parse(JSON.stringify(obj, _1.Serialize), (_, value) => {
        if (Array.isArray(value)) return new Set(value);
        if (value != null && typeof value === "object")
            return new Map(Object.entries(value));
        return value;
    });
}
module.exports = Deserialize;

"use strict";

function CssColor(color) {
    const Matches =
        /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/gim;
    return Matches.test(color);
}
module.exports = CssColor;

"use strict";

const index = require("../CustomFetch/index.js");
function RandomQuote() {
    return (0, index.Get)("https://api.quotable.io/random")
        .Fetch()
        .then((v) => v)
        .catch((error) => {
            throw new Error(error.message, { cause: error?.cause });
        });
}
module.exports = RandomQuote;

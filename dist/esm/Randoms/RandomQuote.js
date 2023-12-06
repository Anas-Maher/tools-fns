import { Get } from "../CustomFetch/index.js";
function RandomQuote() {
    return Get("https://api.quotable.io/random")
        .Fetch()
        .then((v) => v)
        .catch((error) => {
        throw new Error(error.message, { cause: error?.cause });
    });
}
export default RandomQuote;

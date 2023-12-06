import { Quote } from "../../dist/types/index.d.ts";
import { Get } from "../CustomFetch/index.js";

function RandomQuote(): Promise<Quote> {
    return Get("https://api.quotable.io/random")
        .Fetch<Quote>()
        .then((v) => v)
        .catch((error: Error) => {
            throw new Error(error.message, { cause: error?.cause });
        });
}

export default RandomQuote;

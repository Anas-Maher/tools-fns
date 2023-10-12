import { ErrorMessage, Quote } from "../../lib/types";
import ErrorCode from "./ErrorCode.mjs";

const RandomQuote = async (): Promise<Quote | ErrorMessage> => {
    try {
        const res = await fetch("https://api.quotable.io/random");
        if (!res.ok) {
            throw new Error("Bad Response", { cause: res.status });
        }
        const quote: Quote = await res.json();
        return quote;
    } catch (error: any) {
        return ErrorCode(error?.cause);
    }
};

export default RandomQuote;

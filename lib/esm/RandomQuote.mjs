import ErrorCode from "./ErrorCode.mjs";
const RandomQuote = async () => {
    try {
        const res = await fetch("https://api.quotable.io/random");
        if (!res.ok) {
            throw new Error("Bad Response", { cause: res.status });
        }
        const quote = await res.json();
        return quote;
    }
    catch (error) {
        return ErrorCode(error?.cause);
    }
};
export default RandomQuote;

import { Quote } from "../types";

const RandomQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const quote: Quote = await res.json();
    //implement handle status code
    return quote;
};

export default RandomQuote;

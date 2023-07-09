const RandomQuote = async () => {
    try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        const quote = await data;
        return { quote, quote_content: quote.content };
    }
    catch (err) {
        throw new Error(`Err Occurred \n\n ${err}`);
    }
};
export default RandomQuote;

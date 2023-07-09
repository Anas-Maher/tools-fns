const IsColor = (color: string): boolean => {
    // TODO Improve RegEx
    const pattern =
        /(hsl(\s+)?\((\s+)?\d{1,3}(\s+)?\,(\s+)?\d{1,3}\%(\s+)?\,(\s+)?\d{1,3}\%(\s+)?\))|(rgb(\s+)?\((\s+)?\d{1,3}(\s+)?\,(\s+)?\d{1,3}(\s+)?\,(\s+)?\d{1,3}(\s+)?\))|(\#([a-f]|[A-F]|[0-9]){3,6})|([a-z]|[A-Z])+/;
    if (typeof color !== "string") {
        throw new Error(
            "argument for color must be string"
        );
    }
    return pattern.test(color);
};

export default IsColor;

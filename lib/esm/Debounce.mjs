function Debounce(callback, delay) {
    delay ??= 1200;
    let ID;
    if (typeof delay !== "number")
        throw new Error("delay must be a number");
    return (...args) => {
        clearTimeout(ID);
        ID = setTimeout(() => callback(...args), delay);
    };
}
;
export default Debounce;

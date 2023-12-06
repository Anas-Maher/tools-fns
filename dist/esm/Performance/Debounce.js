function Debounce(callback, delay = 1200) {
    let ID;
    return (...args) => {
        clearTimeout(ID);
        ID = setTimeout(() => callback(...args), delay);
    };
}
export default Debounce;

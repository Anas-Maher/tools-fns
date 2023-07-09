function Throttle(callback, delay) {
    delay ??= 1200;
    if (typeof delay !== "number")
        throw new Error("delay must be a number");
    let stop = false;
    let wait;
    const func = () => {
        if (wait == null) {
            stop = false;
        }
        else {
            callback(...wait);
            wait = null;
            setTimeout(func, delay);
        }
    };
    return (...args) => {
        if (stop) {
            wait = args;
            return;
        }
        callback(...args);
        stop = true;
        setTimeout(func, delay);
    };
}
export default Throttle;
/*
    "repository": {
    "url": "https://github.com/Anas-Maher/npm_package.git"
        },
            "bugs": {
        "url": "https://github.com/Anas-Maher/npm_package/issues"
    },
    "homepage": "https://github.com/Anas-Maher/npm_package/#readme",
     */

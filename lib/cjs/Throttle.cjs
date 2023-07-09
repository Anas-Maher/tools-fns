function Throttle(callback, delay) {
    delay ??= 1200;
    if (typeof delay !== "number")
        throw new Error("delay must be a number");
    let stop = false;
    let wait;
    const func = () => {
        if (wait == null) {
            stop = false;
        } else {
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
module.exports = Throttle;

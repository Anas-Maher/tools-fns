"use strict";

function Throttle(callback, delay = 1200) {
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

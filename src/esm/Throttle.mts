import { Func } from "../../lib";
function Throttle(
    callback: Func<unknown>,
    delay?: number
): Func<void> {
    delay ??= 1200;
    if (typeof delay !== "number")
        throw new Error("delay must be a number");
    let stop = false;
    let wait: unknown[] | null;
    const func = () => {
        if (wait == null) {
            stop = false;
        } else {
            callback(...wait);
            wait = null;
            setTimeout(func, delay);
        }
    };
    return (...args: unknown[]) => {
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

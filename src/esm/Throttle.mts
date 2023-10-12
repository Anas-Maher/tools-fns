import { Fn } from "../../lib/types";
function Throttle(callback: Fn, delay = 1200): Fn<void> {
    let stop = false;
    let wait: any[] | null;
    const func = () => {
        if (wait == null) {
            stop = false;
        } else {
            callback(...wait);
            wait = null;
            setTimeout(func, delay);
        }
    };
    return (...args: any[]) => {
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

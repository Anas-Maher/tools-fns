import { Func } from "../types";
function Throttle<T = any>(callback: Func<T>, delay?: number): Func<void> {
    delay ??= 1200;
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


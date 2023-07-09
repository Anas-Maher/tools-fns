import {Func} from '../../lib'
function Debounce  (callback: Func<unknown>, delay?: number): Func<void>  {
    delay ??= 1200;
    let ID: any;
    if (typeof delay !== "number") throw new Error("delay must be a number");
    return (...args: unknown[]) => {
        clearTimeout(ID);
        ID = setTimeout(() => callback(...args), delay);
    };
};

export default Debounce
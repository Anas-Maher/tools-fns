import { Func } from "../types";
function Debounce(callback: Func<unknown>, delay?: number): Func<void> {
    delay ??= 1200;
    let ID: string | number | NodeJS.Timeout | undefined;
    return (...args: unknown[]) => {
        clearTimeout(ID);
        ID = setTimeout(() => callback(...args), delay);
    };
}

export default Debounce;

import type { Fn } from "../../dist/types/index.d.ts";
function Debounce(callback: Fn, delay = 1200): Fn<void> {
    let ID: string | number | NodeJS.Timeout | undefined;
    return (...args: any[]) => {
        clearTimeout(ID);
        ID = setTimeout(() => callback(...args), delay);
    };
}

export default Debounce;

import type { Body } from "../../dist/types/index.d.ts";

function Serialize<T>(_: string, value: Body<T> | T) {
    if (value instanceof Map) {
        const result: boolean[] = [];
        value.forEach((_, key) => {
            if (typeof key !== "string") {
                result.push(false);
            }
        });
        if (!result.includes(false)) {
            return Object.fromEntries(value);
        }
        throw new Error("Map Keys Should Be a String To Be Converted");
    }
    if (value instanceof Set) return Array.from(value);
    return value;
}

export default Serialize;

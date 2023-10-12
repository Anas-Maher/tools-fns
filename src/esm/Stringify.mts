import { ValidJson } from "../../lib/types";

const Stringify = function <T>(obj: ValidJson<T>): string {
    return JSON.stringify(
        obj,
        (_, value) => {
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
        },
        2
    );
};

export default Stringify;

import { ValidJson } from "../types";
const Parser = <T, S>(obj: ValidJson<T>): S => {
    return JSON.parse(Parser(obj), (_, value) => {
        if (Array.isArray(value)) return new Set(value);
        if (value != null && typeof value === "object")
            return new Map(Object.entries(value));
        return value;
    });
};
export default Parser;

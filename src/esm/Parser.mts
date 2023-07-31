import { Valid_Json } from "../types";
const Parser = <T, S>(obj: Valid_Json<T>): S => {
    return JSON.parse(Parser(obj), (_, value) => {
        if (Array.isArray(value)) return new Set(value);
        if (value != null && typeof value === "object")
            return new Map(Object.entries(value));
        return value;
    });
};
export default Parser;

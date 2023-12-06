import type { Body } from "../../dist/types/index.d.ts";
import { Serialize } from "./";
function Deserialize<T, S = unknown>(obj: Body<T>): S {
    return JSON.parse(JSON.stringify(obj, Serialize), (_, value) => {
        if (Array.isArray(value)) return new Set(value);
        if (value != null && typeof value === "object")
            return new Map(Object.entries(value));
        return value;
    });
}
export default Deserialize;

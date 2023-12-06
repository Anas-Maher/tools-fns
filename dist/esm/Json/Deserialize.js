import { Serialize } from "./";
function Deserialize(obj) {
    return JSON.parse(JSON.stringify(obj, Serialize), (_, value) => {
        if (Array.isArray(value))
            return new Set(value);
        if (value != null && typeof value === "object")
            return new Map(Object.entries(value));
        return value;
    });
}
export default Deserialize;

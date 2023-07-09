function Converter(format, obj, space) {
    space ??= 1;
    const params = [format, obj, space];
    if (params.some((v) => v === null)) {
        throw new Error(
            "please provide the right arguments"
        );
    }
    switch (format) {
        case "stringify":
            return JSON.stringify(
                obj,
                (_, value) => {
                    if (value instanceof Map)
                        return Object.fromEntries(value);
                    if (value instanceof Set)
                        return Array.from(value);
                    return value;
                },
                space
            );
        case "parse":
            return JSON.parse(
                Converter("stringify", obj),
                (_, value) => {
                    if (Array.isArray(value))
                        return new Set(value);
                    if (value && typeof value === "object")
                        return new Map(
                            Object.entries(value)
                        );
                    return value;
                }
            );
        default:
            return Converter("stringify", obj, space);
    }
}
module.exports = Converter;

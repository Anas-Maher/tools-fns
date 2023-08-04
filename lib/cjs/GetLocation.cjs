const ErrorCode = require("./ErrorCode.cjs");
const GetLocation = () => {
    return navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude: lat, longitude: long } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${long}&format=jsonv2`;
        const controller = new AbortController();
        try {
            const response = await fetch(url, {
                signal: controller.signal,
            });
            if (!response.ok) {
                throw new Error("Bad Response", { cause: response.status });
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return ErrorCode(error?.cause);
        } finally {
            controller.abort();
        }
    });
};
module.exports = GetLocation;

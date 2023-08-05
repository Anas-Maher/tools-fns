import { DeepReadonly, Fn, HomeLocation } from "../../lib/types";
import ErrorCode from "./ErrorCode.mjs";
const GetLocation = (): ReturnType<Fn<void>> => {
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
            const data: DeepReadonly<HomeLocation> = await response.json();
            return data;
        } catch (error: any) {
            return ErrorCode(error?.cause);
        } finally {
            controller.abort();
        }
    });
};

export default GetLocation;

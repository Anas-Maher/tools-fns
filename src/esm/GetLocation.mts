import { DeepReadonly, Func, HomeLocation } from "../types";
const GetLocation = (): ReturnType<Func<void>> => {
    return navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude: lat, longitude: long } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${long}&format=jsonv2`;
        const controller = new AbortController();
        return fetch(url, {
            signal: controller.signal,
        })
            .then((response) => /* fetch error  */ response.json())
            .then((data: DeepReadonly<HomeLocation>) => data)
            .catch((error: Error) => {
                throw new Error(error?.message, { cause: error?.cause });
            })
            .finally(() => {
                controller.abort()
            });
    });
};

export default GetLocation;

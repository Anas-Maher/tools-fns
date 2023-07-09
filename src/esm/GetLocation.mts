import { Func } from "../../lib";
const GetLocation = (): ReturnType<Func<void>> => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            // api url `https://nominatim.openstreetmap.org`;
            const url = new URL(
                "https://nominatim.openstreetmap.org/reverse"
            );
            url.searchParams.set("format", "json");
            url.searchParams.set(
                "lat",
                latitude.toString()
            );
            url.searchParams.set(
                "long",
                longitude.toString()
            );
            const { abort, signal } = new AbortController();
            return fetch(url, {
                signal,
            })
                .then((response) => response.json())
                .then(
                    (
                        data /*Promise<DeepReadonly<Location>>*/
                    ) => data
                )
                .then((result) => result.address.city)
                .catch(
                    (err) =>
                        new Error(
                            `Err Happened while fetching ${err}`
                        )
                )
                .finally(() => {
                    abort();
                });
        }
    );
};

export default GetLocation;

import { RequestData } from "../types/types";

const CustomFetch = async function <T>(request: RequestData<T>) {
    try {
        const controller = new AbortController();
        // .then .catch and try-error and return ex. json blob etc.
        switch (request.method) {
            case "GET": {
                return fetch(request.url, {
                    cache: request.cache,
                    headers: request.headers,
                    signal: controller.signal,
                    method: request.method,
                })
                    .then((res) =>
                        /*throw fetch error func and try-error*/ res.json()
                    )
                    .finally(() => {
                        controller.abort();
                    });
            }
            case "PATCH": {
                return fetch(request.url, {
                    cache: request.cache,
                    headers: request.headers,
                    signal: controller.signal,
                    method: request.method,
                })
                    .then((res) =>
                        /*throw fetch error func and try-error*/ res.json()
                    )
                    .finally(() => {
                        controller.abort();
                    });
            }
            case "DELETE": {
                return fetch(request.url, {
                    cache: request.cache,
                    headers: request.headers,
                    signal: controller.signal,
                    method: request.method,
                })
                    .then((res) =>
                        /*throw fetch error func and try-error*/ res.json()
                    )
                    .finally(() => {
                        controller.abort();
                    });
            }
            case "POST": {
                return fetch(request.url, {
                    cache: request.cache,
                    headers: request.headers,
                    signal: controller.signal,
                    method: request.method,
                })
                    .then((res) =>
                        /*throw fetch error func and try-error*/ res.json()
                    )
                    .finally(() => {
                        controller.abort();
                    });
            }
            case "PUT": {
                return fetch(request.url, {
                    cache: request.cache,
                    headers: request.headers,
                    signal: controller.signal,
                    method: request.method,
                })
                    .then((res) =>
                        /*throw fetch error func and try-error*/ res.json()
                    )
                    .finally(() => {
                        controller.abort();
                    });
            }
            default: {
                throw new Error("Unsupported Request");
            }
        }
    } catch (err: unknown) {
        const error = err as Error;
        throw new Error(error?.message, { cause: error?.cause });
    }
};

export default CustomFetch;

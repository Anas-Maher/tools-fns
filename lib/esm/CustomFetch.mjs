import ErrorCode from "./ErrorCode.mjs";
import Stringify from "./Stringify.mjs";
const CustomFetch = async function (request) {
    switch (request.method) {
        case "GET": {
            const controller = new AbortController();
            try {
                const res = await fetch(request.url, {
                    cache: request.cache,
                    signal: controller.signal,
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        ...request.headers,
                    },
                    method: "GET",
                });
                ``;
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                const data = await res.json();
                return data;
            }
            catch (error) {
                return ErrorCode(error?.cause);
            }
            finally {
                controller.abort();
            }
        }
        case "POST": {
            const controller = new AbortController();
            try {
                const res = await fetch(request.url, {
                    signal: controller.signal,
                    method: "POST",
                    body: Stringify(request.body),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        ...request.headers,
                    },
                });
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                const data = await res.json();
                return data;
            }
            catch (error) {
                return ErrorCode(error?.cause);
            }
            finally {
                controller.abort();
            }
        }
        case "PUT": {
            const controller = new AbortController();
            try {
                const res = await fetch(request.url, {
                    signal: controller.signal,
                    method: "PUT",
                    body: Stringify(request.body),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        ...request.headers,
                    },
                });
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                const data = await res.json();
                return data;
            }
            catch (error) {
                return ErrorCode(error?.cause);
            }
            finally {
                controller.abort();
            }
        }
        case "PATCH": {
            const controller = new AbortController();
            try {
                const res = await fetch(request.url, {
                    signal: controller.signal,
                    method: "PATCH",
                    body: Stringify(request.body),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        ...request.headers,
                    },
                });
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                const data = await res.json();
                return data;
            }
            catch (error) {
                return ErrorCode(error?.cause);
            }
            finally {
                controller.abort();
            }
        }
        case "DELETE": {
            const controller = new AbortController();
            try {
                const res = await fetch(request.url, {
                    signal: controller.signal,
                    method: "DELETE",
                    body: Stringify(request.body),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        ...request.headers,
                    },
                });
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                const data = await res.json();
                return data;
            }
            catch (error) {
                return ErrorCode(error?.cause);
            }
            finally {
                controller.abort();
            }
        }
        default:
            throw new Error("Unsupported Method");
    }
};
export default CustomFetch;

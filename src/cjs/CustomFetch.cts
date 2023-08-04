import { FetchRequest } from "../types";
import ErrorCode from "./ErrorCode.cjs";
import Stringify from "./Stringify.cjs";
const CustomFetch = async function <T, S>(
    request: FetchRequest<T>
): Promise<S> {
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
                const data: S = await res.json();
                return data;
            } catch (error: any) {
                return ErrorCode(error?.cause);
            } finally {
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
                const data: S = await res.json();
                return data;
            } catch (error: any) {
                return ErrorCode(error?.cause);
            } finally {
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
                const data: S = await res.json();
                return data;
            } catch (error: any) {
                return ErrorCode(error?.cause);
            } finally {
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
                const data: S = await res.json();
                return data;
            } catch (error: any) {
                return ErrorCode(error?.cause);
            } finally {
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
                const data: S = await res.json();
                return data;
            } catch (error: any) {
                return ErrorCode(error?.cause);
            } finally {
                controller.abort();
            }
        }
        default:
            throw new Error("Unsupported Method");
    }
};

export default CustomFetch;

"use strict";
const ErrorCode = require("./ErrorCode.cjs");
const Stringify = require("./Stringify.cjs");
const CustomFetch = async function (request) {
    request.headers ||= {};
    request.cache ||= "default";
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
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                const data = await res.json();
                return data;
            } catch (error) {
                return (0, ErrorCode.default)(error?.cause);
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
                    body: (0, Stringify.default)(request.body),
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
            } catch (error) {
                return (0, ErrorCode.default)(error?.cause);
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
                    body: (0, Stringify.default)(request.body),
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
            } catch (error) {
                return (0, ErrorCode.default)(error?.cause);
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
                    body: (0, Stringify.default)(request.body),
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
            } catch (error) {
                return (0, ErrorCode.default)(error?.cause);
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
                    body: (0, Stringify.default)(request.body),
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
            } catch (error) {
                return (0, ErrorCode.default)(error?.cause);
            } finally {
                controller.abort();
            }
        }
        default:
            throw new Error("Method Not Implemented");
    }
};
module.exports = CustomFetch;

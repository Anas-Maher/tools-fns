"use strict";
const ErrorCode = (status) => {
    switch (status) {
        case 500:
            throw new Error("Internal Server Error", {
                cause: status,
            });
        case 408:
            throw new Error("Request Timeout", {
                cause: status,
            });
        case 405:
            throw new Error("Method not Allowed", {
                cause: status,
            });
        case 404:
            throw new Error("Not Found", {
                cause: status,
            });
        case 403:
            throw new Error("Forbidden", {
                cause: status,
            });
        case 402:
            throw new Error("Payment Required", {
                cause: status,
            });
        case 401:
            throw new Error("Unauthorized", {
                cause: status,
            });
        case 400:
            throw new Error("Bad Request", {
                cause: status,
            });
        case 300:
            throw new Error("Multiple Choices", { cause: 300 });
        case 301:
            throw new Error("Moved Permanently", { cause: 301 });
        case 302:
            throw new Error("Found", { cause: 302 });
        case 303:
            throw new Error("See Other", { cause: 303 });
        case 304:
            throw new Error("Not Modified", { cause: 304 });
        case 307:
            throw new Error("Temporary Redirect", { cause: 307 });
        case 308:
            throw new Error("Permanent Redirect", { cause: 308 });
        default:
            throw new Error(`This May Not Be Implemented Yet`);
    }
};
module.exports = ErrorCode;

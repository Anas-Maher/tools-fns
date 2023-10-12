const ErrorCode = (status) => {
    switch (status) {
        case 500:
            return { message: "Internal Server Error", cause: status };
        case 408:
            return { message: "Request Timeout", cause: status };
        case 405:
            return { message: "Method not Allowed", cause: status };
        case 404:
            return { message: "Not Found", cause: status };
        case 403:
            return { message: "Forbidden", cause: status };
        case 402:
            return { message: "Payment Required", cause: status };
        case 401:
            return { message: "Unauthorized", cause: status };
        case 400:
            return { message: "Bad Request", cause: status };
        case 300:
            return { message: "Multiple Choices", cause: status };
        case 301:
            return { message: "Moved Permanently", cause: 301 };
        case 302:
            return { message: "Found", cause: 302 };
        case 303:
            return { message: "See Other", cause: 303 };
        case 304:
            return { message: "Not Modified", cause: 304 };
        case 307:
            return { message: "Temporary Redirect", cause: 307 };
        case 308:
            return { message: "Permanent Redirect", cause: 308 };
        default:
            return { message: `This May Not Be Implemented Yet` };
    }
};
export default ErrorCode;

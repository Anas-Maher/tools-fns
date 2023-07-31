const Try_Error = (status: number | undefined) => {
    switch (status) {
        //300's
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
        //400's
        //
        //500's
        //
        //default
        case undefined:
            break;
        default:
            throw new Error("This Might Not Be Implemented");
    }
};

export default Try_Error;

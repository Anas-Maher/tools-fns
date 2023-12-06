"use strict";

function Get(url) {
    const controller = new AbortController();
    return {
        controller,
        async Fetch(options) {
            try {
                const res = await fetch(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "GET",
                    signal: controller.signal,
                    ...options,
                });
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                return res.json();
            } catch (_error) {
                const error = _error;
                controller.abort("Error");
                throw new Error(error?.message, { cause: error?.cause });
            } finally {
                controller.abort("End Of life");
            }
        },
    };
}
module.exports = Get;

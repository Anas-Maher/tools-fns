import { Serialize } from "../Json";
export default function Post(url) {
    const controller = new AbortController();
    return {
        controller,
        async Fetch(body, options) {
            try {
                const res = await fetch(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    signal: controller.signal,
                    body: JSON.stringify(body, Serialize),
                    ...options,
                });
                if (!res.ok) {
                    throw new Error("Bad Response", {
                        cause: res.status,
                    });
                }
                return res.json();
            }
            catch (_error) {
                const error = _error;
                controller.abort("Error");
                throw new Error(error?.message, { cause: error?.cause });
            }
            finally {
                controller.abort("End Of life");
            }
        },
    };
}

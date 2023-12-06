export default function Get(url: URL | RequestInfo) {
    const controller = new AbortController();
    return {
        controller,
        async Fetch<R = unknown>(options?: RequestInit): Promise<R> {
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
                const error = _error as Error;
                controller.abort("Error");
                throw new Error(error?.message, { cause: error?.cause });
            } finally {
                controller.abort("End Of life");
            }
        },
    };
}

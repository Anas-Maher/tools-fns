import type { Body } from "../../dist/types/index.d.ts";
import { Serialize } from "../Json/index.js";

export default function Post(url: URL | RequestInfo) {
    const controller = new AbortController();
    return {
        controller,
        async Fetch<T, R = unknown>(
            body: Body<T>,
            options?: RequestInit
        ): Promise<R> {
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

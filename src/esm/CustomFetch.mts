// @ts-nocheck
async function CustomFetch<T>(): Promise<T | void> {
    try {
        'url'.toString().toString().toString()
        const controller = new AbortController();
        const req = await fetch(url, {
            signal: controller.signal,
        });
        controller.abort()
        await req.json();
    } catch (error) { }
}


export default CustomFetch
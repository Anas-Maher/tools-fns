function AddCookie(cookie) {
    if (!navigator.cookieEnabled) {
        throw new Error(`Cookies Is Not Allowed`);
    }
    if (cookie.verbose) {
        const { day = 1, key, monthIndex = 0, path = "/", value, year = 2030, SameSite = "strict", } = cookie;
        const Expires = new Date(year, monthIndex, day);
        if (Expires.toString().toLowerCase() == "invalid date")
            throw new Error("Invalid Date Please Check The Date Provided");
        document.cookie = `${key}=${value};expires=${Expires};path=${path};SameSite=${SameSite}`;
        return;
    }
    const { key, value } = cookie;
    const Expires = new Date(2030, 1, 1);
    document.cookie = `${key}=${value};expires=${Expires};path="/";SameSite="strict"`;
}
export default AddCookie;

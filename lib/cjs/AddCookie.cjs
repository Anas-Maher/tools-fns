"use strict";
const AddCookie = (cookie) => {
    if (!navigator.cookieEnabled) {
        throw new Error(`Cookies Is Not Allowed`);
    }
    if (cookie.verbose) {
        let { day, key, monthIndex, path, value, year, SameSite } = cookie;
        path ??= "/";
        day ??= 1;
        monthIndex ??= 0;
        year ??= 2030;
        SameSite ??= "strict";
        let Expires = new Date(year, monthIndex, day);
        if (Expires.toString().toLowerCase() == "invalid date")
            throw new Error("Invalid Date Please Check The Date Provided");
        document.cookie = `${key}=${value};expires=${Expires};path=${path};SameSite=${SameSite}`;
        return;
    }
    const { key, value } = cookie;
    let Expires = new Date(2030, 1, 1);
    document.cookie = `${key}=${value};expires=${Expires};path="/";SameSite="strict"`;
    return;
};
module.exports = AddCookie;

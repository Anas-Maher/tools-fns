"use strict";

function GetCookie(key) {
    const cookie = document.cookie;
    const Decoded = decodeURIComponent(cookie.split(";").join(",")).split(",");
    let result;
    const value = Decoded?.[0]?.trim()?.split("=");
    for (let i = 0; i < Decoded.length; i++) {
        if (value?.[0] === key) {
            result = value[1];
        }
    }
    return result;
}
module.exports = GetCookie;

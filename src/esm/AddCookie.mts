import { CookieSameSite } from "../../lib";
function AddCookie(key: string,value?: string,day?: string,monthIndex?: string,year?: string,path?: string,SameSite?: CookieSameSite): void {
    if (!navigator.cookieEnabled)
        throw new Error(`Adding Cookies Is Not Allowed`);
    value ??= "value";
    path ??= "/";
    day ??= "1";
    monthIndex ??= "0";
    year ??= "2030";
    SameSite ??= "strict";
    const params = [
        key,
        value,
        day,
        monthIndex,
        year,
        path,
        SameSite,
    ];
    if (params.some((v) => typeof v !== "string"))
        throw new Error(
            `plz provide a string for the arguments`
        );
    let Expires = new Date(`${day}/${monthIndex}/${year}`);
    if (Expires.toString().toLowerCase() == "invalid date")
        throw new Error(
            "Invalid Date Please Check The Date Provided"
        );
    document.cookie = `${key}=${value};expires=${Expires};path=${path};SameSite=${SameSite}`;
}


export default AddCookie;

import { AddCookie, DeleteCookie, GetCookie } from "./Cookies/index.js";
import { RandomQuote, Hello } from "./Randoms/index.js";
import { CssColor, IsValidEmail } from "./Regex/index.js";
import { Debounce, Throttle } from "./Performance/index.js";
import { Deserialize, Serialize } from "./Json/index.js";
import { PushNotification } from "./Web/index.js";
import { Delete, Get, Patch, Post, Put } from "./CustomFetch/index.js";
import { BinarySearch, AlphabeticSort, NumbersSort } from "./Arrays/index.js";

export {
    //! Cookies
    AddCookie,
    DeleteCookie,
    GetCookie,
    //! Regex
    IsValidEmail,
    CssColor,
    //! Performance
    Debounce,
    Throttle,
    //! Random
    RandomQuote,
    Hello,
    //! Json
    Deserialize,
    Serialize,
    //! Web
    PushNotification,
    //! Array
    BinarySearch,
    AlphabeticSort,
    NumbersSort,
    //! CustomFetch
    Delete,
    Get,
    Patch,
    Post,
    Put,
};

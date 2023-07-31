import { CookieSameSite, DownloadElement, Func, Greeting } from "./types";
//! Capitalize
export declare function Capitalize(word: string): string;
export declare function Capitalize(word: string, sep: string): string;
export declare function Capitalize(
    word: string,
    sep: string,
    join: string
): string;
//! Converter
export declare function Converter<T, S>(
    format: "stringify" | "parse",
    obj: T
): S | string;
export declare function Converter<T, S>(
    format: "stringify" | "parse",
    obj: T,
    space: number | string
): S | string;
//! Cookies
// ?Add Cookie
export declare function AddCookie(key: string): void;
export declare function AddCookie(key: string, value: string): void;
export declare function AddCookie(
    key: string,
    value: string,
    day: string
): void;
export declare function AddCookie(
    key: string,
    value: string,
    day: string,
    monthIndex: string
): void;
export declare function AddCookie(
    key: string,
    value: string,
    day: string,
    monthIndex: string,
    year: string
): void;
export declare function AddCookie(
    key: string,
    value: string,
    day: string,
    monthIndex: string,
    year: string,
    path: string
): void;
export declare function AddCookie(
    key: string,
    value: string,
    day: string,
    monthIndex: string,
    year: string,
    path: string,
    SameSite: CookieSameSite
): void;
//! Debounce
export declare function Debounce(callback: Func<unknown>): Func<void>;
export declare function Debounce(
    callback: Func<unknown>,
    delay: number
): Func<void>;
//! GetLocation
export declare const GetLocation: () => ReturnType<Func<void>>;
//! Hello
export declare const Hello: () => Greeting;
//! IsColor
export declare const IsColor: (color: string) => Error | boolean;
//! PushNotification
export declare function PushNotification(
    title: string,
    body: string
): Notification | string;
export declare function PushNotification(
    title: string,
    body: string,
    ID: boolean,
    tag: string
): Notification | string;
//! QrCode
export declare const QrCode: (
    Img: HTMLImageElement,
    url: string | URL
) => DownloadElement;
//! RandomHex
export declare const RandomHex: () => string;
//! RandomQuote
export declare const RandomQuote: () => Promise<{
    quote: object;
    quote_content: string;
}>;
//! RandomString
export declare const RandomString: (length: number) => string;
//! Throttle
export declare function Throttle(callback: Func<unknown>): Func<void>;
export declare function Throttle(
    callback: Func<unknown>,
    delay: number
): Func<void>;
//! DeleteCookie
export declare const DeleteCookie: (name: string) => void;
//! GetCookie
export declare const GetCookie: (key: string) => string;

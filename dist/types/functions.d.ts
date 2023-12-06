import { CookieStyle, Fn, Greeting, Quote, Body } from "./types";
//! Sorted BY Folders
//?Cookies
declare function AddCookie(cookie: CookieStyle): void;
declare function DeleteCookie(key: string): void;
declare function GetCookie(key: string): string | undefined;
//?Regex
declare function IsValidEmail(email: string): boolean;
declare function CssColor(color: string): boolean;
//?Performance
declare function Debounce(callback: Fn, delay?: number): Fn<void>;
declare function Throttle(callback: Fn, delay?: number): Fn<void>;
//?Random
declare function RandomQuote(): Promise<Quote>;
declare function Hello(): Greeting;
//?Json
declare function Deserialize<T, S = unknown>(obj: Body<T>): S;
declare function Serialize<T>(
    _: string,
    value: Body<T> | T
): T | T[] | Record<string, T>;
//?Web
declare function PushNotification(
    title: string,
    options?: NotificationOptions
): Promise<Notification>;
//?Arrays
declare function BinarySearch<T = unknown>(
    arr: T[],
    target: T,
    start: number,
    end: number
): number;
declare function AlphabeticSort(
    arr: string[],
    order?: "ASC" | "DESC"
): string[];
declare function NumbersSort(arr: number[], order?: "ASC" | "DESC"): number[];
//?CustomFetch
declare function Get(url: URL | RequestInfo): {
    controller: AbortController;
    Fetch<R = unknown>(options?: RequestInit): Promise<R>;
};
declare function Put(url: URL | RequestInfo): {
    controller: AbortController;
    Fetch<T, R = unknown>(body: Body<T>, options?: RequestInit): Promise<R>;
};
declare function Post(url: URL | RequestInfo): {
    controller: AbortController;
    Fetch<T, R = unknown>(body: Body<T>, options?: RequestInit): Promise<R>;
};
declare function Patch(url: URL | RequestInfo): {
    controller: AbortController;
    Fetch<T, R = unknown>(body: Body<T>, options?: RequestInit): Promise<R>;
};
declare function Delete(url: URL | RequestInfo): {
    controller: AbortController;
    Fetch<T, R = unknown>(body: Body<T>, options?: RequestInit): Promise<R>;
};
//
export {
    AddCookie,
    DeleteCookie,
    GetCookie,
    IsValidEmail,
    CssColor,
    Debounce,
    Throttle,
    RandomQuote,
    Hello,
    Deserialize,
    Serialize,
    PushNotification,
    BinarySearch,
    AlphabeticSort,
    NumbersSort,
    Get,
    Put,
    Post,
    Patch,
    Delete,
};

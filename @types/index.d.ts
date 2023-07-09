// ! IGNORE THIS IT'S FOR BACKUP

export type CookieSameSite = 'lax' | 'strict' | 'none'
export type Greeting = "Good Morning"| "Good Afternoon"| "Good evening"
export type Func<T> = (...args:unknown[]) => T extends void ? void : T extends Function ? Function : unknown
export type DeepReadonly<T> = T extends Primitives ? T : T extends Array<infer U> ? DeepReadonlyArray<U> : DeepReadonlyObject<T>
export type Primitives = string | number | boolean | bigint | undefined | null | symbol
export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}
export type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>
}
export interface DownloadElement {
    Download(): HTMLAnchorElement;
}


//! Capitalize
declare function Capitalize(word: string) : string 
declare function Capitalize(word: string, sep: string) : string 
declare function Capitalize(word: string, sep: string, join: string) : string
//! Converter
declare function Converter<T, S>(format: "stringify" | "parse",obj: T): S | string 
declare function Converter<T, S>(format: "stringify" | "parse",obj: T,space: number | string): S | string
//! Cookies
// ?Add Cookie
declare function AddCookie(key: string): void 
declare function AddCookie(key: string,value: string): void 
declare function AddCookie(key: string,value: string,day: string): void 
declare function AddCookie(key: string,value: string,day: string,monthIndex: string): void 
declare function AddCookie(key: string,value: string,day: string,monthIndex: string,year: string ,): void 
declare function AddCookie(key: string,value: string,day: string,monthIndex: string,year: string ,path: string ,): void 
declare function AddCookie(key: string,value: string,day: string,monthIndex: string,year: string ,path: string , SameSite: CookieSameSite): void 
//! Debounce
declare function Debounce  (callback: Func<unknown>): Func<void>
declare function Debounce  (callback: Func<unknown>, delay: number): Func<void>
//! GetLocation
declare const GetLocation : () => ReturnType<Func<void>> 
//! Hello
declare const Hello : () => Greeting
//! IsColor
declare const IsColor : (color: string) => Error | boolean
//! PushNotification
declare function PushNotification(title: string,body: string): Notification | string 
declare function PushNotification(title: string,body: string,ID: boolean,tag: string): Notification | string 
//! QrCode
declare const QrCode : (Img: HTMLImageElement , url: string | URL) => DownloadElement
//! RandomHex
declare const RandomHex : () => string
//! RandomQuote
declare const RandomQuote : () => Promise<{quote:object , quote_content:string}>
//! RandomString
declare const RandomString : (length: number) =>  string
//! Throttle
declare function Throttle(callback: Func<unknown>): Func<void>
declare function Throttle(callback: Func<unknown>,delay: number): Func<void>
//! DeleteCookie
declare const DeleteCookie : (name: string) => void
//! GetCookie
declare const GetCookie : (key: string) => string

//! functions only
export {Capitalize , Debounce , Converter ,Throttle , RandomHex ,RandomQuote , GetLocation ,Hello , IsColor , QrCode , RandomString, PushNotification , AddCookie , DeleteCookie , GetCookie}

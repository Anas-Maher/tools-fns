import {
    CookieStyle,
    ErrorMessage,
    FetchRequest,
    Fn,
    Greeting,
    NotificationStyle,
    Quote,
    ValidJson,
} from "./types";
export declare const AddCookie: (cookie: CookieStyle) => void;
export declare function Capitalize(
    word: string,
    sep?: string,
    join?: string
): string;
export declare const CssColor: (color: string) => boolean;
export declare const CustomFetch: <T, S>(
    request: FetchRequest<T>
) => Promise<S>;
export declare function Debounce(callback: Fn): Fn<void>;
export declare function Debounce(callback: Fn, delay: number): Fn<void>;
export declare const GetLocation: () => ReturnType<Fn<void>>;
export declare const Hello: () => Greeting;
export declare const PushNotification: (
    notification: NotificationStyle
) => Promise<Notification | ErrorMessage>;
export declare const RandomHex: () => string;
export declare const RandomQuote: () => Promise<Quote>;
export declare const RandomString: (length: number) => string;
export declare function Throttle(callback: Fn): Fn<void>;
export declare function Throttle(callback: Fn, delay: number): Fn<void>;
export declare const DeleteCookie: (name: string) => void;
export declare const GetCookie: (key: string) => string;
export declare const Parser: <T, S>(obj: ValidJson<T>) => S;
export declare const Stringify: <T>(obj: ValidJson<T>) => string;
export declare const ErrorCode: (status: number) => ErrorMessage;

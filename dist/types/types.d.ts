export type CookieSameSite = "lax" | "strict" | "none";
export interface Quote {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
}
export type Body<T> = Map<string, T> | Set<T> | T[] | Record<string, T>;
export type FullCookie = {
    verbose: true;
    year: number;
    monthIndex: number;
    day: number;
    path: string;
    SameSite?: CookieSameSite;
};
export type SmallCookie = {
    verbose: false;
};
export type CookieStyle = { key: string; value: string } & (
    | FullCookie
    | SmallCookie
);
export type Greeting = "Good Morning" | "Good Afternoon" | "Good evening";
export type Fn<R = any, T = any> = (...args: T[]) => R;

export type DeepReadonly<T> = T extends Primitives
    ? T
    : T extends Array<infer U>
    ? DeepReadonlyArray<U>
    : DeepReadonlyObject<T>;
export type Primitives =
    | string
    | number
    | boolean
    | bigint
    | undefined
    | null
    | symbol;
export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}
export type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};


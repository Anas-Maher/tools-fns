export type CookieSameSite = "lax" | "strict" | "none";
export type FullCookie = {
    verbose: true;
    year: number;
    monthIndex: number;
    day: number;
    path: string;
    SameSite?: CookieSameSite;
};
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
export type ValidJson<T> = Map<string, T> | Set<T> | T[] | object;
export type ShortNotification = {
    long: false;
};
export type LongNotification = {
    tag: string;
    long: true;
};
export type NotificationStyle = { title: string; body: string } & (
    | ShortNotification
    | LongNotification
);
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

export type SimpleRequest = {
    method: "GET";
};

export type HeavyRequest<T> = {
    method: "PUT" | "POST" | "DELETE" | "PATCH";
    body: ValidJson<T>;
};

export type ConsentientData = {
    url: RequestInfo | URL;
    cache: RequestCache;
    headers: HeadersInit | undefined;
};

export type FetchRequest<T> = ConsentientData & (SimpleRequest | HeavyRequest<T>);
export interface HomeLocation {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    address: Address;
    boundingbox: string[];
}

export interface Address {
    state: string;
    "ISO3166-2-lvl4": string;
    country: string;
    country_code: string;
}

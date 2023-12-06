"use strict";
const { AddCookie, DeleteCookie, GetCookie } = require("./Cookies/index.js");
const { Hello, RandomQuote } = require("./Randoms/index.js");
const { CssColor, IsValidEmail } = require("./Regex/index.js");
const { Debounce, Throttle } = require("./Performance/index.js");
const { Deserialize, Serialize } = require("./Json/index.js");
const { PushNotification } = require("./Web/index.js");
const { Delete, Get, Patch, Post, Put } = require("./CustomFetch/index.js");
const {
    AlphabeticSort,
    BinarySearch,
    NumbersSort,
} = require("./Arrays/index.js");
module.exports = {
    AddCookie,
    DeleteCookie,
    GetCookie,
    Hello,
    RandomQuote,
    CssColor,
    IsValidEmail,
    Debounce,
    Throttle,
    PushNotification,
    Delete,
    Get,
    Patch,
    Post,
    Put,
    AlphabeticSort,
    BinarySearch,
    NumbersSort,
    Deserialize,
    Serialize,
};

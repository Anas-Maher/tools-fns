# `Tools-Fns`

Gives You Small and Thin Wrappers Over The Native JavaScript To Help You be More Efficient

## Usage

```js
import * as tools from "tools-fns";
```

### Cookies

```js
// Add Cookie
tools.AddCookie({
    style: "short",
    key: "key",
    value: "value",
    path: "/",
    SameSite: "strict", // "lax" , "strict" or "none"
});
// or
tools.AddCookie({
    style: "full",
    key: "key",
    value: "value",
    path: "/",
    SameSite: "strict", // defaults to strict
    day: 1, // day of the month
    monthIndex: 1,
    year: 2024, // year to expire
});
// GetCookie
tools.GetCookie("key"); // "value" or "" if not found
// Delete Cookie
tools.DeleteCookie("key");
```

### Capitalize

#### Returns a PascalCase Word Style

```js
tools.Capitalize(
    "anas-maher" /*word to capitalize*/,
    "-",
    /* optional separator to split the word defaults to " " */ " "
    /* optional join to add between the words defaults to " " */
);
// Result: Anas Maher

// Another Example:

tools.Capitalize("anas -maher", " -", "_"); // Anas Maher
```

### Debounce

#### Used To Enhance Performance

```js
var input = document.querySelector("input");
var p = document.querySelector("p");
var update = tools.Debounce(
    (text) => {
        p.innerHTML = text;
    },
    1000 // optional delay defaults to 1200 ms
);
input.oninput = (ev) => {
    // waits 1000ms after each input to run the function
    update(ev.target.value);
};
```

### Throttle

#### Also Used To Enhance Performance

```js
var input = document.querySelector("input");
var p = document.querySelector("p");
var update = tools.Throttle(
    (text) => {
        p.innerHTML = text;
    },
    1000 // optional delay defaults to 1200 ms
);
input.oninput = (ev) => {
    // runs the function waits 1000ms till runs it again
    update(ev.target.value);
};
```

## Contributing

### For Contributing Send An Email Here <anas.npmjs@gmail.com>
"use strict";

function Hello() {
    const Hellos = ["Good Morning", "Good Afternoon", "Good evening"];
    const Hour = new Date().getHours();
    const time = Hour >= 12 && Hour < 17 ? 1 : Hour >= 17 ? 2 : 0;
    return Hellos[time];
}
module.exports = Hello;

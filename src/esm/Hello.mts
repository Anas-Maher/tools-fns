import { Greeting } from "../types";
const Hello = (): Greeting => {
    const Hellos: Greeting[] = [
        "Good Morning",
        "Good Afternoon",
        "Good evening",
    ];
    const Hour = new Date().getHours();
    const time = Hour >= 12 && Hour < 17 ? 1 : Hour >= 17 ? 2 : 0;
    return Hellos[time];
};

export default Hello;

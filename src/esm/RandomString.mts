const RandomString = (len: number): string => {
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeric = "0123456789";
    let punctuation = "!@#$%^&*()_+~`|{}[]\\/:;?<>,.-=";
    const Chars: string[] = [...string, ...numeric, ...punctuation];
    len = len >= 8 ? len : 10;
    len = Math.ceil(len);
    let Password = "";
    for (let i = 1; i <= len; i++) {
        const rand = Math.floor(Math.random() * Chars.length);
        Password += Chars[rand];
    }
    return Password;
};
export default RandomString;

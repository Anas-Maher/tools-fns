const RandomString = (len) => {
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeric = "0123456789";
    let punctuation = "!@#$%^&*()_+~`|{}[]\\/:;?<>,.-=";
    const Chars = [...string, ...numeric, ...punctuation];
    len = len >= 8 ? len : 10;
    len = Math.trunc(len);
    let Password = "";
    for (let i = 1; i <= len; i++) {
        const rand = Math.floor(Math.random() * Chars.length);
        Password += Chars[rand];
    }
    return Password;
};
module.exports = RandomString;

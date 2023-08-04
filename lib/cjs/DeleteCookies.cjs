const DeleteCookie = (key) => {
    document.cookie = `${key}='';expires=${new Date(
        2020,
        1,
        1,
        1
    )};path="/";SameSite="strict"`;
};
module.exports = DeleteCookie;

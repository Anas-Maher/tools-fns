const DeleteCookie = (key: string): void => {
    const date = new Date(2020, 1, 1, 1);
    document.cookie = `${key}='';expires=${date};path="/";SameSite="strict"`;
};

export default DeleteCookie;

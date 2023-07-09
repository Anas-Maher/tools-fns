import { AddCookie } from "../../lib/index.js";

const DeleteCookie = (name: string): void => {
    AddCookie(name, "", "0", "0", "2020");
};

export default DeleteCookie;

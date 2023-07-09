const index_js_1 = require("../../lib/index.js");
const DeleteCookie = (name) => {
    (0, index_js_1.AddCookie)(name, "", "0", "0", "2020");
};
module.exports = DeleteCookie;

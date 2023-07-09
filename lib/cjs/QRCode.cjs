const QrCode = (Img, url) => {
    const height = 200,
        width = 200;
    if (
        [url, Img, height, width].some(
            (v) => v === null || v === undefined
        )
    )
        throw new Error(
            "please specify all the parameters correctly"
        );
    let api = new URL(
        "https://api.qrserver.com/v1/create-qr-code/"
    );
    api.searchParams.set("size", `${height}x${width}`);
    api.searchParams.set(
        "data",
        `${url ?? "https://www.youtube.com"}`
    );
    Img.src = url.toString();
    return {
        Download() {
            let Link = document.createElement("a");
            fetch(Img.src)
                .then((res) => res.blob())
                .then((href) => URL.createObjectURL(href))
                .catch((err) => {
                    throw new Error(
                        `Err Happened Sorry \n\n ${err}`
                    );
                });
            return Link;
        },
    };
};
module.exports = QrCode;

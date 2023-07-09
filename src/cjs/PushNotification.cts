function PushNotification(title: string,body: string,ID?: boolean,tag?: string): Notification | string {
    const { permission, requestPermission } = Notification;
    ID ??= true;
    title ??= "Title";
    body ??= "Body of the notification";
    try {
        requestPermission();
        if (permission === "granted") {
            if (ID) {
                return new Notification(title, {
                    tag: tag ?? "ID",
                    body: body,
                });
            }
            return new Notification(title, {
                body: body,
            });
        }
        if (permission === "default") {
            throw new Error(`Didn't Deny Didn't Allow`);
        }
        throw new Error(`denied`);
    } catch (err) {
        throw new Error(`Err ${err}`);
    }
}

export default PushNotification
function PushNotification(title, options) {
    return Notification.requestPermission()
        .then(() => {
        switch (Notification.permission) {
            case "granted": {
                return new Notification(title, { ...options });
            }
            default:
                throw new Error(`Access denied`);
        }
    })
        .catch((error) => {
        throw new Error(error?.message);
    });
}
export default PushNotification;

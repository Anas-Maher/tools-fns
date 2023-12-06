function PushNotification(title: string, options?: NotificationOptions) {
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
        .catch((error: Error) => {
            throw new Error(error?.message);
        });
}

export default PushNotification;

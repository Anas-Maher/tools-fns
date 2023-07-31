import { NotificationStyle } from "../types";

const PushNotification = async (notification: NotificationStyle) => {
    const { permission, requestPermission } = Notification;
    try {
        await requestPermission();
        // implement trial_error
        switch (permission) {
            case "granted": {
                if (!notification.long) {
                    return new Notification(notification.title, {
                        body: notification.body,
                    });
                }
                return new Notification(notification.title, {
                    tag: notification.tag,
                    body: notification.body,
                });
            }
            case "default":
                throw new Error(`Request Access First`);
            case "denied":
                throw new Error(`Request Access First`);
            default:
                throw new Error(`unknown Error`);
        }
    } catch (error) {
        throw new Error(error?.toString());
    }
};

export default PushNotification;

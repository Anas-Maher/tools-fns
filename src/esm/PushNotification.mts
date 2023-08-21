import { NotificationStyle } from "../../lib/types";

const PushNotification = async (
    notification: NotificationStyle
): Promise<Notification> => {
    try {
        await Notification.requestPermission();
        switch (Notification.permission) {
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
            default:
                throw new Error(`Access denied`);
        }
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export default PushNotification;

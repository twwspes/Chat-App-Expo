import { Expo } from 'expo-server-sdk';
import DeviceTokenModel from '../models/DeviceTokenModel.js';
const expo = new Expo();
export const sendPushNotification = async ({ user_id, title, body, payload = {} }) => {
    const tokens = await DeviceTokenModel.find(user_id ? { user_id } : undefined);
    if (tokens.length < 1) {
        return;
    }
    const messages = [];
    for (let pushToken of tokens) {
        if (!Expo.isExpoPushToken(pushToken.token)) {
            console.error(`Push token ${pushToken.token} is not a valid Expo push token`);
            continue;
        }
        messages.push({
            ttl: 5,
            to: pushToken.token,
            sound: 'default',
            body,
            title,
            data: payload
        });
    }
    const chunks = expo.chunkPushNotifications(messages);
    for (let chunk of chunks) {
        try {
            await expo.sendPushNotificationsAsync(chunk);
        }
        catch (error) {
            console.error(error);
        }
    }
};
//# sourceMappingURL=Notifications.js.map
import { schema, normalize } from 'normalizr';
import * as notifications from '../../notifications.json';

const usersSchema = new schema.Entity('users');
const messagesSchema = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notificationsSchema = new schema.Entity('notifications', { author: usersSchema, context: messagesSchema });

const getAllNotificationsByUser = (userId) => {
    const normalizedData = normalize(notifications.default, [notificationsSchema]);
    const notificationsData = normalizedData.entities.notifications;
    const messagesData = normalizedData.entities.messages;

    const result = [];
    for (const key in notificationsData) {
        if (notificationsData[key].author === userId) {
            const message = messagesData[notificationsData[key].context];
            result.push(message);
        }
    }
    return result;
};

const notificationsNormalizer = (data) => {
    return normalize(data, [notificationsSchema]).entities.messages;
}

export { usersSchema, messagesSchema, notificationsSchema, getAllNotificationsByUser, notificationsNormalizer };

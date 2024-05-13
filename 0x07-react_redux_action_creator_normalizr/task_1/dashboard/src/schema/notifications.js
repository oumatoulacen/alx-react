import { schema } from 'normalizr';
import * as notifications from '../../notifications.json';

const usersSchema = new schema.Entity('users');
const messagesSchema = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notificationsSchema = new schema.Entity('notifications', { author: usersSchema, context: messagesSchema });

const getAllNotificationsByUser = (userId) => {
    return (notifications.default.filter(
        (notification) => notification.author.id === userId).map(
            ({ context })=> context));
};

// console.log(getAllNotificationsByUser('5debd7648ba8641ce0a34ea4'));

export { usersSchema, messagesSchema, notificationsSchema, getAllNotificationsByUser };

import * as notifications from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    return (notifications.default.filter(
        (notification) => notification.author.id === userId).map(
            ({ context })=> context));
};

// console.log(getAllNotificationsByUser('5debd7648ba8641ce0a34ea4'));

export { getAllNotificationsByUser };
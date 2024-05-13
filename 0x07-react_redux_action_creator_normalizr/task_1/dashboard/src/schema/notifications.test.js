import { normalize, schema } from "normalizr";
import { usersSchema, messagesSchema, notificationsSchema, getAllNotificationsByUser } from "./notifications";
import * as notifs from '../../notifications.json';

describe("getAllNotificationsByUser", () => {
  it('read data from a json', () => {
    const data = [
        {
          guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
          isRead: true,
          type: 'urgent',
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
          isRead: false,
          type: 'urgent',
          value:
            'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed',
        },
      ],
      allContext = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

    expect(allContext).toEqual(expect.arrayContaining(data));
  });

    it("should return an array of notifications", () => {
      const userId = "5debd764a7c57c7839d722e9";
      const result = getAllNotificationsByUser(userId);
      expect(result).toEqual([
        {
          guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
          isRead: true,
          type: "urgent",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
          guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
          isRead: false,
          type: "urgent",
          value:
            "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
        }
      ]);
  });
});



describe("normaliz the data", () => {
  it("verify that normalized data has a correct result array.", () => {
    const normalizedData = normalize(notifs.default, [notificationsSchema]);
    const { result } = normalizedData;

    expect(result).toEqual([
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ]);
  });

  it("verify that normalized data has a correct users entity. Test to access the user with the id 5debd764a7c57c7839d722e9", () => {
    const normalizedData = normalize(notifs.default, [notificationsSchema]);
    const { entities } = normalizedData;
    const user = entities.users["5debd764f8452ef92346c772"];
    // console.log(`user: ${JSON.stringify(user)}`);
    expect(user).toEqual(expect.objectContaining({"age": 25, "email": "cherry.miles@holberton.nz", "id": "5debd764f8452ef92346c772", "name": {"first": "Cherry", "last": "Miles"}, "picture": "http://placehold.it/32x32"}));
  });

  it("verify that normalized data has a correct messages entity. Test to access the message with the id 5debd764d8939d1e0b2e08b5", () => {
    const normalizedData = normalize(notifs.default, [notificationsSchema]);
    const { entities } = normalizedData;
    const message = entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"];
    // console.log(`message: ${JSON.stringify(message)}`);
    expect(message).toEqual(expect.objectContaining({
      "guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      "isRead": false, "type": "default",
      "value": "Cursus risus at ultrices mi."
    }));
  });

  it("verify that normalized data has a correct notifications entity. Test to access the notification with the id 5debd7642e815cd350407777", () => {
    const normalizedData = normalize(notifs.default, [notificationsSchema]);
    const { entities } = normalizedData;
    const notification = entities.notifications["5debd7642e815cd350407777"];
    console.log(`notification: ${JSON.stringify(notification)}`);
    expect(notification).toEqual(
      expect.objectContaining({
      "author": "5debd764f8452ef92346c772",
       "context": "3068c575-d619-40af-bf12-dece1ee18dd3",
        "id": "5debd7642e815cd350407777"
      })
    );
  });


});

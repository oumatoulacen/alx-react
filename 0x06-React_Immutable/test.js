// // 1. Converting into Immutable using Map
// import getImmutableObject from "./1-map.js";
// let  map1 = getImmutableObject({
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132
// })

// let map2 = map1.set('wall', true);

// console.log("task1: map1:", map1.toJS());
// console.log("task1: map2:", map2.toJS());

// console.log("-------------------------------------------------");

// // 2. Accessing nested elements
// import accessImmutableObject from "./2-nested.js";

// const nestedValue = accessImmutableObject({
//     name: {
//          first: "Guillaume",
//          last: "Salva"
//     }
// }, ['name', 'first']);

// console.log('task2: nestedValue:', nestedValue)

// console.log("-------------------------------------------------");

// 3. List and push
// import { getListObject, addElementToList } from './3-list.js';

// const list1 = getListObject([1, 2, 3, 4, 5]);
// const list2 = addElementToList(list1, 6);

// console.log('task3: list1:', list1.toJS());
// console.log('task3: list2:', list2.toJS());

// console.log("-------------------------------------------------");

// 6. Nested merge
import mergeDeeplyElements from './6-deeply.js';

const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      },
    },
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      },
    },
  },
};

const res = mergeDeeplyElements(page1, page2).toJS();
console.log('task6: res:', res);

// 1. Converting into Immutable using Map
import getImmutableObject from "./1-map.js";
let  map1 = getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
})

let map2 = map1.set('wall', true);

console.log("task1: map1:", map1.toJS());
console.log("task1: map2:", map2.toJS());

console.log("-------------------------------------------------");

// 2. Accessing nested elements
import accessImmutableObject from "./2-nested.js";

const nestedValue = accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first']);

console.log('task2: nestedValue:', nestedValue)
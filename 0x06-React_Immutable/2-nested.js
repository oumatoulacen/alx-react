export default function accessImmutableObject(object, array) {
    return object.toJs().getIn(array);
}

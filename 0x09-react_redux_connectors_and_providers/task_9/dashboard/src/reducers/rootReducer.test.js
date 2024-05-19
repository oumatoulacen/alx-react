import rootReducer, { initialState } from "./rootReducer";
import { Map } from "immutable";

describe("rootReducer tests", function () {

    it("verifies the state returned by the rootReducer function equals the initial state when no initial state is passed", function () {
        const state = rootReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it("verifies the state returned by the rootReducer function equals the initial state when no action is passed", function () {
        const expectedState = {
            courses: Map({}),
            notifications: Map({}),
            ui: Map({}),
        };

        const state = rootReducer(expectedState, {});
        expect(state).toEqual(expectedState);
    });


});
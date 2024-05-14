import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

describe("courseReducer", () => {
    it("should return the initial state", () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it("should handle FETCH_COURSE_SUCCESS", () => {
        const courses = [
            { id: 1, name: "Course 1" },
            { id: 2, name: "Course 2" },
        ];
        expect(courseReducer([], { type: FETCH_COURSE_SUCCESS, data: courses })).toEqual([
            { id: 1, name: "Course 1", selected: false },
            { id: 2, name: "Course 2", selected: false },
        ]);
    });

    it("should handle SELECT_COURSE", () => {
        const state = [
            { id: 1, name: "Course 1", selected: false },
            { id: 2, name: "Course 2", selected: false },
        ];
        expect(courseReducer(state, { type: SELECT_COURSE, index: 1 })).toEqual([
            { id: 1, name: "Course 1", selected: true },
            { id: 2, name: "Course 2", selected: false },
        ]);
    });

    it("should handle UNSELECT_COURSE", () => {
        const state = [
            { id: 1, name: "Course 1", selected: true },
            { id: 2, name: "Course 2", selected: false },
        ];
        expect(courseReducer(state, { type: UNSELECT_COURSE, index: 1 })).toEqual([
            { id: 1, name: "Course 1", selected: false },
            { id: 2, name: "Course 2", selected: false },
        ]);
    });

    it("should return the current state for unknown action type", () => {
        const state = [
            { id: 1, name: "Course 1", selected: false },
            { id: 2, name: "Course 2", selected: false },
        ];
        expect(courseReducer(state, { type: "UNKNOWN" })).toEqual(state);
    });
});

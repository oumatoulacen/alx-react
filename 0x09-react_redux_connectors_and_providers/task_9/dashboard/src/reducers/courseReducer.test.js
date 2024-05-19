import courseReducer, { initialState } from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from "immutable";

const data = [
    { id: 1, name: "ES6" },
    { id: 2, name: "Webpack" },
    { id: 3, name: "React" }
];

describe("courseReducer", () => {
    it("should return the initial state", () => {
        expect(courseReducer(undefined, {})).toEqual(Map({}));
    });

    it("should handle FETCH_COURSE_SUCCESS", () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: data
        };

        expect(courseReducer(undefined, action)).toEqual(Map({
            1: { id: 1, name: "ES6", isSelected: false },
            2: { id: 2, name: "Webpack", isSelected: false },
            3: { id: 3, name: "React", isSelected: false }
        }));
    });

    it("should handle SELECT_COURSE", () => {
        const action = {
            type: SELECT_COURSE,
            index: 2
        };

        const state = Map({
            1: { id: 1, name: "ES6", isSelected: false },
            2: { id: 2, name: "Webpack", isSelected: false },
            3: { id: 3, name: "React", isSelected: false }
        });

        expect(courseReducer(state, action)).toEqual(Map({
            1: { id: 1, name: "ES6", isSelected: false },
            2: { id: 2, name: "Webpack", isSelected: true },
            3: { id: 3, name: "React", isSelected: false }
        }));
    });

    it("should handle UNSELECT_COURSE", () => {
        const action = {
            type: UNSELECT_COURSE,
            index: 1
        };

        const state = Map({
            1: { id: 1, name: "ES6", isSelected: true },
            2: { id: 2, name: "Webpack", isSelected: false },
            3: { id: 3, name: "React", isSelected: false }
        });

        expect(courseReducer(state, action)).toEqual(Map({
            1: { id: 1, name: "ES6", isSelected: false },
            2: { id: 2, name: "Webpack", isSelected: false },
            3: { id: 3, name: "React", isSelected: false }
        }));
    });
});

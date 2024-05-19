import { getListCourses } from "./courseSelector";

describe("courseSelector", () => {
    it("should return an empty array when there are no courses", () => {
        const state = {
        courses: undefined
        };
    
        expect(getListCourses(state)).toEqual([]);
    });
    
    it("should return an array when there are courses", () => {
        const state = {
        courses: {
            valueSeq: () => ({
            toArray: () => ["course1", "course2"]
            })
            }
        };
    
        expect(getListCourses(state)).toEqual(["course1", "course2"]);
    });
});
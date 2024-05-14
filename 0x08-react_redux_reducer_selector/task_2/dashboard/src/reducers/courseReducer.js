import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const courseReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map(course => ({ ...course, selected: false }));
        case SELECT_COURSE:
            return state.map(course => {
                if (course.id === action.index) {
                    return { ...course, selected: true };
                }
                return course;
            });
        case UNSELECT_COURSE:
            return state.map(course => {
                if (course.id === action.index) {
                    return { ...course, selected: false };
                }
                return course;
            });
        default:
            return state;
    }
};

export default courseReducer;
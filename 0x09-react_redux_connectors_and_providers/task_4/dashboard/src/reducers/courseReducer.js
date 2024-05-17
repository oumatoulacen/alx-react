import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer, course } from '../schema/courses';
import { Map } from 'immutable';

export const initialState = Map({});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedCourses = coursesNormalizer(action.data);
            // Add isSelected property to each course
            Object.keys(normalizedCourses).forEach(key => {
                normalizedCourses[key].isSelected = false;
            });
            return state.merge(normalizedCourses);
        case SELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], false);
        default:
            return state;
    }
};

export default courseReducer;

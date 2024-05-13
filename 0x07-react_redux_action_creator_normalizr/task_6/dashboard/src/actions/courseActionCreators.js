import { SELECT_COURSE, UNSELECT_COURSE } from '../../../../task_5/dashboard/src/actions/courseActionTypes';

const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index
    };
};

const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    };
};

const boundSelectCourse = (index) => {
    return (dispatch) => {
        dispatch(selectCourse(index));
    };
};

const boundUnselectCourse = (index) => {
    return (dispatch) => {
        dispatch(unSelectCourse(index));
    };
};

export { selectCourse, unSelectCourse, boundSelectCourse, boundUnselectCourse };

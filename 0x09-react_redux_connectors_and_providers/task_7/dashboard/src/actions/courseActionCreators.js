import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

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

const setCourses = (data) => {
    return {
        type: FETCH_COURSE_SUCCESS,
        data
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

const fetchCourses = () => {
    return (dispatch) => {
        return fetch('http://localhost:8564/courses.json')
            .then(response => response.json())
            .then(data => {
                dispatch(setCourses(data));
            })
            .catch(error => console.log('Error fetching courses: ', error.message));
    };
};

export {
    selectCourse, unSelectCourse, boundSelectCourse, boundUnselectCourse,
    fetchCourses, setCourses
};


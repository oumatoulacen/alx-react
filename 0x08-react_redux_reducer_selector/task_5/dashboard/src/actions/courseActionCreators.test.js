import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe(' test for the selectCourse action creator', () => {
    it('should return the expected action', () => {
        const action = selectCourse(1);
        expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
    });

    it('should return the expected action', () => {
        const action = unSelectCourse(1);
        expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});

import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";


const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
];


describe('CourseList tests', () => {
    it('should render CourseList', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders CourseList without listCourses', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('table')).toHaveLength(1);
        expect(wrapper.find('CourseListRow')).toHaveLength(3);
        expect(wrapper.find('tbody').childAt(0).html()).toEqual("<tr class=\"myRow\"><td>No course available yet</td><td></td></tr>")
    })

    it('renders 1 table', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses}/>);
        expect(wrapper.find('table')).toHaveLength(1);
        wrapper.find('ul').forEach((ele) => {
            expect(ele.equals(<CourseListRow />)); // Check if the element is a CourseListRow(doesn't check the props)
        });
    })

    it('renders 2 headers', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses}/>);
        expect(wrapper.find('table thead CourseListRow')).toHaveLength(2);
    })

    it('renders 5 diffrent rows', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses}/>);
        expect(wrapper.find('table thead CourseListRow')).toHaveLength(2);
        expect(wrapper.find('table tbody CourseListRow')).toHaveLength(3);
    });
});
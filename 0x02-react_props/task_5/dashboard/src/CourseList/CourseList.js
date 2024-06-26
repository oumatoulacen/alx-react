import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'
import courseShape from './CourseShape'
import PropTypes from 'prop-types'


// Add a propType listCourses that will take an array of the shape you created

const CourseList = ({ listCourses }) => {
    return (
        <table>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 && <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                }
                {listCourses.map((course) => (
                    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                ))}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(courseShape).isRequired
}

CourseList.defaultProps = {
    listCourses: []
}

export default CourseList
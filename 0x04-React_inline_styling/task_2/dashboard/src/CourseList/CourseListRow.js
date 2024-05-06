import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyling = {
    backgroundColor:'#deb5b545'
  };
  return (
    <tr style={{backgroundColor: '#f5f5f5ab'}}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2" style={headerStyling}>{textFirstCell}</th>
        :
          <>
            <th style={headerStyling}>{textFirstCell}</th>
            <th style={headerStyling}>{textSecondCell}</th>
          </>
      :
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;
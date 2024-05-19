import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow(props) {
  const { id, isHeader, textFirstCell, textSecondCell, isChecked, onChangeRow } = props;

  const headerStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };
  const selectedStyle = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={selectedStyle} className={ isChecked ? css(rowsStyles.rowChecked) : ""}>
      { isHeader ?
        (
          textSecondCell === null ?
            (
              <th colSpan="2" className={css(rowsStyles.thcenter)}>
                {textFirstCell}
              </th>
            ) : (
                  <>
                    <th className={css(rowsStyles.th)}>{textFirstCell}</th>
                    <th className={css(rowsStyles.th)}>{textSecondCell}</th>
                  </>
                )
        )  : (
                <>
                  <td className={css(rowsStyles.td)}>
                  <input type="checkbox" onChange={() => onChangeRow(id, !isChecked)} checked={isChecked}/>
                    {textFirstCell}</td>
                  <td className={css(rowsStyles.td)}>{textSecondCell}</td>
                </>
              )
      }
    </tr>
  );
}

const rowsStyles = StyleSheet.create({
  thcenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: 3,
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});
CourseListRow.defaultProps = {
  id: null,
  isHeader: false,
  textSecondCell: null,
  isChecked: false,
  onChangeRow: () => {},
};

CourseListRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
};


export default CourseListRow;
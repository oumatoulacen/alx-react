import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { markAsRead } from "../actions/notificationActionCreators";
import { connect } from "react-redux";

const NotificationItem = React.memo(
  function NotificationItem({ type, html, value, markAsRead, id }) {
  let listItem;

  let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

  if (!html && value) {
    listItem = (
      <li className={typeStyle} data-notification-type={type} onClick={() => markAsRead(id)} >
        {value}
      </li>
    );
  } else {
    listItem = <li className={typeStyle} dangerouslySetInnerHTML={html} data-notification-type={type} onClick={() => markAsRead(id)} ></li>
  }
  return listItem;
});

NotificationItem.defaultProps = {
  type: "default",
  html: null,
  value: "",
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const mapDispatchToProps = {
  markAsRead,
};

export { NotificationItem as StatelessNotificationItem };
export default connect(null, mapDispatchToProps)(NotificationItem);

// styles
const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const listItemSmall = {
  listStyle: "none",
  borderBottom: "1px solid black",
  padding: "10px 8px",
  fontSize: "20px",
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
    [screenSize.small]: listItemSmall,
  },

  urgent: {
    color: "red",
    [screenSize.small]: listItemSmall,
  },
});

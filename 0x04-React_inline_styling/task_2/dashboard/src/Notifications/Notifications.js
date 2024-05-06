import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

// Define Holberton Red color
const HOLBERTON_RED = '#e1484c';

// Define the styles with Aphrodite
const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    top: '7px',
    right: '7px',
  },
  notifications: {
    border: `3px dotted ${HOLBERTON_RED}`, // Using Aphrodite to set a border with Holberton red
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
  },
  closeButton: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    fontSize: '15px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    outline: 'none',
  },
  listItemDefault: {
    color: 'blue', // For default priority
  },
  listItemUrgent: {
    color: HOLBERTON_RED, // For urgent priority
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={() => {
                console.log('Close button has been clicked');
              }}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  type="default" className={css(styles.listItemDefault)}
                  value="No new notification for now"
                />
              ) : null}
              {this.props.listNotifications.map((val) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={this.markAsRead}
                  id={val.id}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;

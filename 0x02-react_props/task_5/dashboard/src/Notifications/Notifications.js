import React from 'react'
import './Notifications.css'
import Close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import NotificationItemShape from './NotificationItemShape'
import propTypes from 'prop-types'

function btnClicked() {
    console.log("Close button has been clicked");
}

const Notifications = ({ displayDrawer, listNotifications }) => {
    return <div className='Notifications-holder'>
        <div className='menuItem'>
            <p>Your Notifications</p>
        </div>
        {displayDrawer ? (
            <div className='Notifications'>
                <p>Here is the list of Notifications</p>
                <button aria-label='Close' onClick={btnClicked} style={{ position: 'absolute', right: '4px', top: '4px', background: 'none', border: 'none' }}>
                    <img src={Close} width={'30px'} alt='close button' />
                </button>
                {
                    listNotifications.length === 0 ? (
                        <NotificationItem type='default' value='No new notification for now' />
                    ) : (
                        <ul>
                            {
                                listNotifications.map((notification) => (
                                    <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                                ))
                            }
                        </ul>
                    )
                }
            </div >
        ) : (
            null
        )
        }

    </div>
}

Notifications.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}

export default Notifications;

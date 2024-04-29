import React from 'react'
import './Notifications.css'
import Close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import propTypes from 'prop-types'

function btnClicked() {
    console.log("Close button has been clicked");
}

const Notifications = ({ displayDrawer }) => {
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
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem type="urgent" html value={getLatestNotification()} />
                </ul>
            </div >
        ) : (
            null
        )
        }

    </div>
}

Notifications.propTypes = {
    displayDrawer: propTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: true
}

export default Notifications;

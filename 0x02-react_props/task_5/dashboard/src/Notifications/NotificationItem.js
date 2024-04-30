import React from 'react'

function NotificationItem({ type, value, html }) {
  return (
    <>
        {html ? (
            <li data={type} dangerouslySetInnerHTML={html}></li>
        ) : (
            <li data={type}>{value}</li>
        )}
    </>
  )
}

export default NotificationItem

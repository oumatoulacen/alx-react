import React from 'react'

function NotificationItem({ type, value, html }) {
  return (
    <>
        {html ? (
            <li data={type} dangerouslySetInnerHTML={{ __html: value }}></li>
        ) : (
            <li data={type}>{value}</li>
        )}
    </>
  )
}

export default NotificationItem

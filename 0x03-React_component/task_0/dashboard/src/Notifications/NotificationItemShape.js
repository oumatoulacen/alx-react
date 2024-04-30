import propType from 'prop-types'

const NotificationItemShape = propType.shape({
    id: propType.number.isRequired,
    html: propType.shape({
        __html: propType.string
    }),
    type: propType.string.isRequired,
    value: propType.string
})

export default NotificationItemShape

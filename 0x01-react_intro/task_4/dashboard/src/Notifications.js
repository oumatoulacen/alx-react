import React from 'react'
import {getLatestNotification} from './utils'
import './Notifications.css'
import closeIcon from './close.png'

function Notifications
() {
  return (
    <div className='Notifications'>
        Here is the list of notifications
        <button
          style={{position:'absolute', top:'7px', right:'7px', border:'1px solid black', margin:'10px', borderRadius:'50%'}}
          aria-label='close' onClick={()=>console.log('Close button has been clicked')}>
            <img src={closeIcon} width={25} alt='x'/>
        </button>
        <ul>
          <li data='default'>New course available</li>
          <li data='urgent'>New resume available</li>
          <li
            data='urgent'
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
		  	</ul>

    </div>
  )
}

export default Notifications


import React from 'react'

function SocialListItem({item}) {
  return (
    <li>
    <a href="http://youtube.com/">
        <i className={`bi ${item.icon}`}></i>
        {/* <span className="navName">{item.class}</span> */}
    </a>
    </li>   
  )
}

export default SocialListItem

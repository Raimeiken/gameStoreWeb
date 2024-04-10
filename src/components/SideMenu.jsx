import React from 'react'
import './sideMenu.css'
import NavListItem from './NavListItem'
import navListData from '../data/navListData'
import SocialListItem from './SocialListItem'
import socialListData from '../data/socialListData'
import { useState } from 'react'

function SideMenu({active, sectionActive}) {
    const [navData, setNavData] = useState(navListData)
    const [socialData, setSocialData] = useState(socialListData)

    const handleNavOnClick =(id, target)=>{
      const newNavData=navData.map(nav=>{
        nav.active=false;
        if(nav._id === id) nav.active=true;
        return nav
      })
      setNavData(newNavData);
      sectionActive(target);
    }
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Impact</span>
      </a>
      <ul className="nav">
        {navData.map(item=>(
            <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick} />
        ))}
      </ul>
      <ul className="social">
        {socialData.map(item=>(
            <SocialListItem key={item._id} item={item}/>
        ))}
        {/* <li>
            <a href="#">
                <i className="bi bi-meta"></i>
            </a>
        </li>
        <li>
            <a href="#">
                <i className="bi bi-twitter-x"></i>
            </a>
        </li>
        <li>
            <a href="#">
                <i className="bi bi-youtube"></i>
            </a>
        </li> */}
        <li>
            <a href="#" className='share'>
                <i className="bi bi-share"></i>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu

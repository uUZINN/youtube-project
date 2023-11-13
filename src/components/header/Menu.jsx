import React from 'react'
import { Link } from 'react-router-dom'
// import { AiOutlineHome } from "react-icons/ai"
// import { PiCoatHangerFill } from "react-icons/pi"
// import { IoIosToday } from "react-icons/io"
// import { BiCalendarHeart } from "react-icons/bi"
import { menuText } from "../../data/header.js"

const Menu = () => {
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {menuText.map((menu, key) => (
                    <li key={key}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
import React, { useState } from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    const headerClass = isMenuActive ? 'show' : 'hide';
    return (
        <header id='header' className={headerClass} role='banner'>
            <Logo onClick={toggleMenu} />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header
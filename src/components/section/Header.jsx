import React, { useState } from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'

const Header = () => {
    const [headerClass, setHeaderClass] = useState('');

    const toggleHeaderClass = () => {
        setHeaderClass(headerClass === 'show' ? '' : 'show');
    };
    return (
        <header id='header' role='banner' className={headerClass}>
            <Logo toggleHeaderClass={toggleHeaderClass} />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header
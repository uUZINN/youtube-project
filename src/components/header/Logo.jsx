import React from 'react'
import { Link } from 'react-router-dom'
import { PiCoatHangerBold } from "react-icons/pi"

const Logo = ({ toggleHeaderClass }) => {

    return (

        <>
            <h1 className="header__logo">
                <Link to="/" onClick={toggleHeaderClass}>
                    <em ><PiCoatHangerBold /></em>
                    <span>fashion<br /> youtube</span>
                </Link>
            </h1>
        </>

    )
}

export default Logo
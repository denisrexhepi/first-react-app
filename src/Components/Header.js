import React from 'react'
import Navigation from './Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                 AppName
            </span>
            <Navigation/>            
        </header>
    )
}

export default Header;
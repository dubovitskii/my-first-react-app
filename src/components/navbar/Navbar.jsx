import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <div className={s.item}>
                <NavLink to='/todos'  activeClassName={s.activeLink}>ToDo`s</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/message' activeClassName={s.activeLink}>Message</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
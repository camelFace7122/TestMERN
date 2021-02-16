import React from 'react' 
import {NavLink} from 'react-router-dom'
import cls from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <nav className={cls.navigation}>
            <ul className={cls.navigationMenu}>
                <li>
                    <NavLink to={'/about'}>
                        Информация
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/companies'}>
                        Тест лист
                    </NavLink>
                </li>
            </ul>
        </nav>
    )  
}

export default NavMenu
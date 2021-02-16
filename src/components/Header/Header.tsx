import React from 'react';
import cls from './Header.module.css'
import { Link } from 'react-router-dom'
import authorPhoto from './../../assets/images/author_photo.jpg' 
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
    return (
        <header className={cls.mainHeader}>
            <div className={cls.myCard}>
                <h1 className={cls.myCard__leftside}>
                    <Link to="/">
                        Aslan Kosshanov
                    </Link>
                </h1>
                <img src={authorPhoto} alt="Website Author" className={cls.myCard__avatar} />
            </div>
            <NavMenu />
        </header>
    )
}

export default Header

import React, {useState} from 'react';
import './navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav_scroll_color, set_nav_scroll_color] = React.useState('false');
    const on_change_nav_scroll_color = () => {
        if(window.scrollY > 400) {
            set_nav_scroll_color(true);
        }else {
            set_nav_scroll_color(false);
        }        
    };
    window.addEventListener('scroll', on_change_nav_scroll_color);
    
    return (
        <nav className={nav_scroll_color ? "navbar-scroll-color navbar-main" : "navbar-main"}>
            <ul>              
                <li className="nav-item">
                    <Link activeClass="active-navbar" to="home" spy={true} smooth={true} duration={500} offset={10}>
                        Home
                    </Link>
                </li>         
                <li className="nav-item">
                    <Link activeClass="active-navbar" to="fasilitas" spy={true} smooth={true} duration={500} offset={10}>
                        Fasilitas
                    </Link>
                </li>                     
                <li className="nav-item">
                    <Link activeClass="active-navbar" to="pendaftaran" spy={true} smooth={true} duration={500} offset={-200}>
                        Pendaftaran
                    </Link>
                </li>                     
                <li className="nav-item">
                    <Link activeClass="active-navbar" to="kontak" spy={true} smooth={true} duration={500} offset={-300}>
                        Kontak
                    </Link> 
                </li>                    
            </ul>
        </nav>
    );
}
export default Navbar;
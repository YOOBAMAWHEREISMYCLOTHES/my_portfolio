import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import './header.css';

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Projects',
        url: '#projects'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
];


const Header = () => {

    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle('active_menu');


    return (
        <header className='header'>
                <div className="navigation">
                    <div className="social_links">
                    <a className='github_logo' href='https://github.com/YOOBAMAWHEREISMYCLOTHES'><i class="ri-github-fill"></i></a>
                    <a className='linkedin_logo' href='https://www.linkedin.com/in/bohdan-dovhyi-4a1628216/'><i class="ri-linkedin-box-fill"></i></a>
                    <a className='instagram_logo' href='https://www.instagram.com/verydovgyy/'><i class="ri-instagram-line"></i></a>
                    </div>
                    <div className='nav_menu' ref={menuRef}>
                        <div className='nav_list_wrapper d-flex align-items-center gap-5'>
                            <ul className='nav_list'>

                                {
                                    navLinks.map((item, index) => (
                                        <li className='nav_item' key={index}>
                                            <a href={item.url} onClick={menuToggle}>{item.display}</a>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className='menu_right'>
                            </div>
                        </div>
                    </div>
                    <div className='mobile_menu'>
                        <span><i class='ri-menu-fill' onClick={menuToggle}></i></span>
                    </div>
                </div>

        </header>
    )
}

export default Header;
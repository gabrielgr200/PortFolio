import React, { useState } from 'react'
import './NavBar.css'
import './NavBar_Mobile.css'

const NavBar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <section className='body'>
            <ul className={`navigation ${isActive ? 'active' : ''}`}>
                <li className='li'>
                    <li><a href="/Home">Início</a></li>
                    <li><a href="/Home">Sobre mim</a></li>
                    <li><a href="/Home">Projetos</a></li>
                    <li><a href="/Home">Contatos</a></li>
                </li>
                <span className="toggleMenu" onClick={toggleMenu}></span>
            </ul>
        </section>
    )
}

export default NavBar
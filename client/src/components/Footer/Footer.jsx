import React from 'react';
import './Footer.css';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer container-fluid p-4 text-white'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="footer-title">
                    <Link to='/'>Noted.</Link>
                </div>
                <div className='footer-copyright'>
                    Developed by <a href="https://mansiruhil.vercel.app" target='_blank' rel="noreferrer">Mansi Ruhil</a>
                </div>
                <div className='social-links'>
                    <a href="https://github.com/vimistify/todo-list" target='_blank' rel="noreferrer">
                        GitHub <FiArrowUpRight />
                    </a>
                    <a href="https://x.com/cantexitvim" target='_blank' rel="noreferrer">
                        X <FiArrowUpRight />
                    </a>
                    <a href="https://instagram.com/m.ansi.ruhil" target='_blank' rel="noreferrer">
                        Instagram <FiArrowUpRight />
                    </a>
                    <a href="https://www.linkedin.com/in/mansi-ruhil-7a00a0228/" target='_blank' rel="noreferrer">
                        LinkedIn <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Footer;
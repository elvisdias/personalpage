import React from 'react'
import {FaTwitter, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul className={footerStyles.navList}>
                    <div className={footerStyles.icons}>
                        <li>
                            <a href='https://twitter.com/_elvisdias_' target="_blank"><FaTwitter className={footerStyles.icon} /></a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/elvis-dias/' target="_blank" ><FaLinkedin className={footerStyles.icon}/></a>
                        </li>
                        <li>
                            <a href='https://github.com/elvisdias' target="_blank" ><FaGithub className={footerStyles.icon}/></a>
                        </li>                
                        <li>
                            <a href='http://instagram.com/_elvisdias_' target="_blank"> <FaInstagram className={footerStyles.icon}/> </a>
                        </li>
                    </div>
                   
                </ul>
            </nav>        
        </footer>
    )
}

export default Footer
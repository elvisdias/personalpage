import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    {/*
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    )*/}
    {/*
           <h1>
               <Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to='/'>
                {data.site.siteMetadata.title}
               </Link> 
            </h1>
           */}
    return (
        <header>           
           <div className={headerStyles.container}>
              <p className={headerStyles.box}><Link className={headerStyles.title} to='/laboratory'>LAB</Link></p>
           </div>           
        </header>
    )
}

export default Header
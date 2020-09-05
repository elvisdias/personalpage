import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = (props) => {    
    const data = useStaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `)
    if (props.title=="en"){
        return (<Helmet title={`${data.site.siteMetadata.title}`}  />) 
    } else {
        return (<Helmet title={'E aí'}  />)
    }
    
}

export default Head
import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import LabHome from '../components/lab'
import Img from 'gatsby-image'

import '../styles/index.scss'
import LayoutLab from '../components/layoutLab'
import LabStyles from '../components/layout.module.scss'

import Video from '../components/video'

const Laboratory = () => {
const data = useStaticQuery(graphql`
query images{
    image: file(relativePath: {eq: "place.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  } 
  
`)
    return (    
    //<Img fluid={data.image.childImageSharp.fluid}/>   
        <div>
          <LabHome/>
        </div>
    )
}

export default Laboratory
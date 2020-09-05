import React from 'react'
import place from "../videos/place.mp4"
import '../styles/index.scss'

const Video = () => {
    return (    
        <video controls muted autoPlay width="100%">
            <source src={place} type="video/mp4" />
        </video>
    )
}

export default Video
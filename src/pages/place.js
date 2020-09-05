import React from 'react'
import Header from '../components/header'
import '../styles/index.scss'
import LayoutLab from '../components/layoutLab'
import LabStyles from '../components/layout.module.scss'

import Video from '../components/video'

const Place = () => {
    return (    
        <div>
          <Header/>
          <LayoutLab>
              <div className={LabStyles.title}>
              Place
              </div>

              <div className={LabStyles.video}>
                  <Video/>
              </div>
              
              <div className={LabStyles.descricao}>
                "Place", from reddit (2017), was a 1000x1000 pixels canvas with one single rule: One pixel could be colored each 5 minutes by a user, through 72 hours.
                The rest is history. Final version in pixel level HD: <a href='https://i.redd.it/agcbmqgjn14z.png'>pic</a>
              </div>
              
          </LayoutLab>
        </div>
    )
}

export default Place
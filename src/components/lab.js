import React from 'react'
import { Link } from 'gatsby'
import LabStyles from './labhome.module.scss'

const LabHome = () => {
    return (      
           <div className={LabStyles.container}>
               <div className={LabStyles.content}>
                    <p className={LabStyles.title}>LAB</p>
               </div>
               <p className={LabStyles.texto}> no much here yet, but I know a <Link className={LabStyles.link} to='/place'>place</Link></p>
           </div>           
           
           
    )
}

export default LabHome
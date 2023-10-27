import React, { FC } from 'react'
import styles from "./Ubicacion.module.css";

export const Ubicacion : FC = () => {
  return (
    
        
          <div className={styles.mapouter} >
            <iframe className={styles.frame} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=zona rosa bogota&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  
          </div>
        
  )
}

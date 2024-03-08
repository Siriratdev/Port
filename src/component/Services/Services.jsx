import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>Can write CSS, JavaScript, create and manage databases. Ability to use databases Ability to learn and adapt new technology to develop effective websites.
</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>Able to design websites that are beautiful and attractive to use There is a choice of colors and fonts. or symbols to make it easy for users to understand To create a good experience for users to use.</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>Websites can be developed to be resizable and displayable to suit the size of the user's screen using Responsive Design to efficiently adapt to portable devices such as mobile phones.
</p>
        </div>
      </div>
    </div>
  )
}

export default Services
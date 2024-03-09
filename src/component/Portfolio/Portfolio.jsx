import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="" alt="" />
            <p>Design Prototype app from Figma</p>
        </div>
        <div className={styles.port_items}>
            <img src="picture/8c8.jpg" alt="" />
            <p>Game from mBlock</p>
        </div>
        <div className={styles.port_items}>
            <img src="picture/03-.png" alt="" />
            <p>Progames thai dessert shop</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

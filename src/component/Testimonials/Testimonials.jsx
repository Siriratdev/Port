import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Coming soon...
          </p>
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Almond</h4>
          <p className={styles.bio}>Backend Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
           Coming soon...
          </p>
          <img
            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Pistachio</h4>
          <p className={styles.bio}>Game Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Coming soon...
          </p>
          <img
            src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Macadamia</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
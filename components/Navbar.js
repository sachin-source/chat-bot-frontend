import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
const name = "Radhe";
const [profileDropdownVisible, setprofileDropdownVisible] = useState(false);

    return (
        <div className={[styles["navbar-container"], styles.body].join(" ")}>
            <div className={styles.left}>
                <h2>
                    {
                        name.split("").map((letter, i) => (
                            <span key={i} >{letter}</span>
                        ))
                    }
                </h2>
                <p>elementary</p>
            </div>
            <div className={styles.right}>
                {/* <span>one</span>
                <span>one</span> */}
                <span>
                    <div className="profile">
                        <div onClick={() => setprofileDropdownVisible(!profileDropdownVisible)} className="profile-button">
                            prof
                        </div>
                        <div style={{display : profileDropdownVisible ? "block" : "none"}} className="profile-body">
                            <div className="logout">logout</div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Navbar

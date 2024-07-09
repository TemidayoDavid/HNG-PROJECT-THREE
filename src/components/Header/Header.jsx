import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import styles from "./header.module.css";

function Header() {


    const styleCart = {
        color: "white",
        width: "20.9px",
        height: "21.24px"

    }

    return (
      <div className={styles.header}>
          <div className={styles.logo}>
              <i className={styles.logo__icon}>Logo</i>
          </div>
          <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                  <li className={styles.nav__item}>
                      <a href="#">Home</a>
                  </li>
                  <li className={styles.av__item}>
                      <a href="#">About</a>
                  </li>
                  
              </ul>
              
                  <button className={styles.dropdown__btn}>
                    <span className={styles.dropdown__btnName}>Categories</span>
                    <KeyboardArrowDownIcon />
                  </button>
              
              <div className={styles.cart}>
                <button className={styles.cart__btn}>
                    <ShoppingCartIcon style={styleCart}/>
                </button>
              </div>
  
  
          </nav>
          
      </div>
    )
  }
  
  export default Header
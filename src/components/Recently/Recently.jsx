import React from 'react'
import image from "../../Assets/grains.jpg"
import styles from "./recently.module.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Navbtn from '../Navbtn/Navbtn';

function Recently() {
  return (
    <div className={styles.carousel}>
        <Navbtn title="Recently Added" />
        <div className={styles.carousel__card}>
            <div className={styles.image__container}>
                <img src={image} alt="" className={styles.carousel__image} />
                <span className={styles.carousel__discount}>20% Off</span>
            </div>

            <div className={styles.product__title}>
                <p className={styles.product__name}>Artisan Hearth Bread & Rolls</p>
                <span className={styles.product__desc}>Soft and fresh French rolls, perfect for sandwiches and toasts.</span>
            </div>

            
            <div className={styles.price}>
                
                <p className={styles.pricenow}>$2.99</p>
            </div>
            
            <button className={styles.carousel__btn}>
                <ShoppingCartOutlinedIcon />
                <span className={styles.btn__addtocart}>Add to Cart</span>
            </button>

        </div>

    </div>
  )
}

export default Recently
import React from "react";
import Styles from '@/components/relacionados/relacionados.module.css'
import { relatedProps } from '@/interfaces/related'

const Relacionados: React.FC<relatedProps> = ({product, title, price, icon}) => {
    return(
        <div className={Styles.relatedContainer}>
            <img className={Styles.imageProduct} src={product} alt="" />

            <div className={Styles.productDetail}>
                <h3 className={Styles.productTitle}>{title}</h3>
                <h4 className={Styles.productPrice}>{price}</h4>
                <a href="">
                    <img className={Styles.icon} src={icon} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Relacionados
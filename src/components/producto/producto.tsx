import styles from '@/components/producto/producto.module.css'

function Product() {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productDetail}>
                <div className={styles.productImages}>

                    <div className={styles.imagesRow}>
                        <img src="./producto.png" alt="" width={104.56} height={69.16} className={styles.imageProduct} />
                        <img src="./producto.png" alt="" width={104.56} height={69.16} className={styles.imageProduct} />
                        <img src="./producto.png" alt="" width={104.56} height={69.16} className={styles.imageProduct} />
                        <img src="./producto.png" alt="" width={104.56} height={69.16} className={styles.imageProduct} />
                    </div>

                    <img src="./producto.png" alt="" width={582.39} height={385} className={styles.imageMain} />
                </div>

                <div className={styles.details}>
                    <h3>Samsung Galaxy S8+ Negro</h3>
                    <h4>$8,000.00 MXN</h4>
                    <img src="./stars.png" alt="" width={120} height={24} />

                    <div className={styles.especificacionesContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur.
                            Quis ultricies tempus in rutrum.
                            Lorem impusm dolor sit amet consecetetur.
                            Quis ultricies tempus un rutrum.
                        </p>     
                    </div>

                    <div className={styles.extraDetails}>
                        <h4>Cantidad:</h4>

                        <div className={styles.cantidad}>
                            <h4>1</h4>
                        </div>
                        
                        <a href="">
                            <img src="./add.png" alt="" width={133.82} height={43}/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
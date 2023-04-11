import React from "react";
import styles from '@/components/reviews/reviews.module.css'
import { reviewsProps } from '@/interfaces/reviews'

const Reviews: React.FC<reviewsProps> = ({ imageProfile, user, review, rating }) => {
    return(
        <div className={styles.usersContainer}>

            <img className={styles.imgProfile} src={imageProfile} alt="" />
            <div className={styles.userCard}>
                <h3 className={styles.userName}>{user}</h3>
                <h4 className={styles.review}>{review}</h4>
                <img className={styles.rating} src={rating} alt="" />
            </div>

        </div>
    );
};

export default Reviews
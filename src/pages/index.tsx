import Header from "@/components/header/header";
import Product from "@/components/producto/producto";
import Detalles from "@/components/detalles/detalles";
import Reviews from "@/components/reviews/reviews";
import Relacionados from "@/components/relacionados/relacionados";
import Footer from "@/components/footer/footer";
import styles from '@/components/reviews/reviews.module.css'
import Styles from '@/components/relacionados/relacionados.module.css'

const relatedData = [
  {
    id:1,
    product: './producto.png',
    title: 'Samsung Galaxy S8+ Negro',
    price: '$8,000.00',
    icon: './icon.png'
  },
  {
    id:2,
    product: './producto.png',
    title: 'Samsung Galaxy S8+ Negro',
    price: '$8,000.00',
    icon: './icon.png'
  },
  {
    id:3,
    product: './producto.png',
    title: 'Samsung Galaxy S8+ Negro',
    price: '$8,000.00',
    icon: './icon.png'
  }
];

const reviewData = [
  {
    id:1,
    imageProfile: './user.png',
    user: 'Usuario 1',
    review: 'Lorem ipsum dolor sit amet consectetur. Imperdiet proin tempor eget tristique.',
    rating: './stars.png'
  },
  {
    id:1,
    imageProfile: './user.png',
    user: 'Usuario 2',
    review: 'Lorem ipsum dolor sit amet consectetur. Imperdiet proin tempor eget tristique.',
    rating: './stars.png'
  }
];

function IndexPage (){
  return(
    <div>

      <header>
        <title>Producto</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </header>

      <Header/>
      <Product/>
      <Detalles/>


        <div className={styles.reviewsContainer}>
          <h2>Reseñas</h2>

          {reviewData.map((review) => (
            <Reviews
                key={review.id}
                imageProfile={review.imageProfile} 
                user={review.user}
                review={review.review}
                rating={review.rating}
            />
          ))}

          <div className={Styles.relatedMain}>
            <h2>Productos Relacionados</h2>

            {relatedData.map((related) => (
              <Relacionados
                key={related.id}
                product={related.product}
                title={related.title}
                price={related.price}
                icon={related.icon}
              />
            ))}

          </div>
        </div>

        <Footer/>

    </div>
  );
}

export default IndexPage;
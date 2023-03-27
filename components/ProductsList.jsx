import React from 'react'
import styles from "../styles/ProductsList.module.css"
import PizzaCard from './PizzaCard'

const ProductsList = ({productsList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
        This is pizza like no other!.. Our dough is made on site every morning with Italian flour... Fresh sauce is made using Italian tomatoes... then once we open our doors all our ingredients are freshly cooked in Chelmsford's only wood-fired oven right in front of your very eyes by our amazing Pizzaolios!
        </p>
        <div className={styles.wrapper}>
        {productsList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
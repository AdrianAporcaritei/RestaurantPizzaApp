import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/telephone.png" alt="" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+40 758 309 988</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href="/" passHref>
          <li className={styles.listItem}>Homepage</li>
        </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logoP.png" alt="" width="140" height="120"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
        <div className={styles.item}>
          <Link href="/cart" passHref>
            <div className={styles.cart}>
              <Image src="/images/cart.png" alt="" width="30" height="30"/>
              <div className={styles.counter}>{quantity}</div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Navbar
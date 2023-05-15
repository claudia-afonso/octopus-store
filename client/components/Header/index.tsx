import { useState } from "react"
import Image from "next/image"
import styles from "./Header.module.scss"
import icon from "../../public/basket.svg"
import { useProductCartContext } from "../../pages/product/context/useProductCartContext"
import Drawer from "../Drawer"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { products } = useProductCartContext()

  const total = products.length > 0 && products.map(product => product.amount).reduce((acc, val) => acc + val)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.ctaContainer}>
            <a href='#' className={styles.logoCta}>
              <Image
                src='https://static.octopuscdn.com/logos/logo.svg'
                alt='Octopus Energy Logo'
                width={230}
                height={33}
              />
            </a>
          </div>
          <div className={styles.ctaContainer}>
            <button className={styles.cartCta} onClick={() => setIsOpen(!isOpen)}>
              <Image src={icon} alt='Shopping cart' width={25} height={25} />
            </button>
            {total > 0 && (
              <label className={styles.badge} title='Basket items'>
                {total}
              </label>
            )}
          </div>
        </div>
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Header

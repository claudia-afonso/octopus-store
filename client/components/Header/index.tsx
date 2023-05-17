import { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import styles from "./Header.module.scss"
import icon from "../../public/basket.svg"
import { useProductCartContext } from "../context/useProductCartContext"
import Loader from "../Loader"
import Link from "next/link"

const DynamicDrawer = dynamic(() => import("../Drawer"), {
  loading: () => <Loader />
})

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { products } = useProductCartContext()

  const total = products.length > 0 && products.map(product => product.amount).reduce((acc, val) => acc + val)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.ctaContainer}>
            <Link href='/' className={styles.logoCta} aria-label='Home'>
              <a>
                <Image
                  src='https://static.octopuscdn.com/logos/logo.svg'
                  alt='Octopus Energy Logo'
                  width={231}
                  height={33}
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <div className={styles.ctaContainer}>
            <button aria-label='Shopping cart' className={styles.cartCta} onClick={() => setIsOpen(!isOpen)}>
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
      <DynamicDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Header

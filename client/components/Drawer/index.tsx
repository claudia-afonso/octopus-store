import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import close from "../../public/close.svg"
import { useProductCartContext } from "../../pages/product/context/useProductCartContext"
import styles from "./Drawer.module.scss"

type DrawerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const { products } = useProductCartContext()

  return (
    <div className={`${styles.drawer} ${isOpen ? styles.opened : ""}`}>
      <div className={styles.closeWrapper}>
        <p className={styles.drawerTitle}>REVIEW YOUR CART</p>
        <button className={styles.close} onClick={() => setIsOpen(!isOpen)}>
          <Image src={close} alt='Close' width={18} height={18} />
        </button>
      </div>

      {products.length === 0 ? (
        <div className={styles.emptyCart}>
          <h3 className={styles.emptyCartTitle}>YOUR CART IS CURRENTLY EMPTY.</h3>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.emptyCartCta}>
            Shop products
          </button>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <h3 className={styles.emptyCartTitle} title='Basket items'>
            {products[0].amount}
          </h3>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.emptyCartCta}>
            Go to checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default Drawer

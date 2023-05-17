import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import close from "../../public/close.svg"
import { useProductCartContext } from "../context/useProductCartContext"
import Card from "../Card"
import styles from "./Drawer.module.scss"

type DrawerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const { products } = useProductCartContext()

  const total =
    products.length > 0 &&
    products.map(product => product.product.price * product.amount).reduce((acc, val) => acc + val)

  return (
    <>
      <div className={`${styles.drawer} ${isOpen ? styles.opened : ""}`}>
        <div className={styles.closeWrapper}>
          <p className={styles.drawerTitle}>REVIEW YOUR CART</p>
          <button aria-label='Close' className={styles.close} onClick={() => setIsOpen(!isOpen)}>
            <Image src={close} alt='Close' width={18} height={18} />
          </button>
        </div>

        {products.length === 0 ? (
          <div className={styles.emptyCart}>
            <h3 className={styles.emptyCartTitle}>YOUR CART IS CURRENTLY EMPTY.</h3>
            <button aria-label='Shop products' onClick={() => setIsOpen(!isOpen)} className={styles.emptyCartCta}>
              Shop products
            </button>
          </div>
        ) : (
          <div className={styles.fullCart}>
            <div className={styles.cartProducts}>
              {products.map((product, index) => (
                <Card product={product} key={index} />
              ))}
            </div>
            <div className={styles.cartTotal}>
              <p>Total</p>
              <p>£{total}</p>
            </div>
            <button aria-label='Go to checkout' onClick={() => setIsOpen(!isOpen)} className={styles.emptyCartCta}>
              Go to checkout
            </button>
          </div>
        )}
      </div>
      <div className={`${styles.backdrop} ${isOpen ? styles.opened : ""}`}></div>
    </>
  )
}

export default Drawer

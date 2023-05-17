import { useState } from "react"
import Image from "next/image"
import { Product } from "../../src/__generated__/graphql"
import { useProductCartContext } from "../context/useProductCartContext"
import check from "../../public/check.svg"
import Counter from "../Counter"
import styles from "./Product.module.scss"

type ProductCardProps = {
  data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { products, update } = useProductCartContext()
  const [productAmount, setProductAmount] = useState(1)
  const [animateButton, setAnimateButton] = useState(false)
  const currentAmount = products.find(p => p.product.id === data.id)?.amount || 0

  const toggleClassName = () => {
    setAnimateButton(true)
    setTimeout(() => setAnimateButton(false), 1000)
  }

  return (
    <div className={styles.card}>
      <div className={`${styles.cardItems} ${styles.imageCard}`}>
        <Image
          className={styles.image}
          src={data.img_url}
          alt={data.name}
          width={854}
          height={1008}
          sizes='100vw'
          priority={true}
        />
      </div>

      <div className={styles.cardItems}>
        <h1 className={styles.title}>{data.name}</h1>
        <p className={styles.subtitle}>{`${data.power} // Packet of ${data.quantity}`}</p>

        <div className={styles.productInfo}>
          <div className={styles.amount}>
            <p className={styles.price}>£{data.price}</p>
            <Counter setAmount={setProductAmount} amount={productAmount} />
          </div>
          <button
            aria-label='Add to cart'
            className={`${styles.button} ${animateButton && styles.isAdded}`}
            onClick={() => {
              update([
                {
                  product: data,
                  amount: productAmount + currentAmount
                }
              ])
              toggleClassName()
            }}
          >
            <span className={styles.buttonLabel}>Add to cart</span>
            <div className={styles.buttonIcon}>
              <Image src={check} width={20} height={20} alt='Added to cart' />
            </div>
          </button>
        </div>

        <div className={`${styles.section} ${styles.sectionLight}`}>
          <h2 className={styles.sectionTitle}>Description</h2>
          <p className={styles.descriptionContent}>{data.description}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Specifications</h2>
          <p className={styles.item}>
            <span className={styles.details}>Brand</span>
            <span className={styles.details}>{data.brand}</span>
          </p>
          <p className={styles.item}>
            <span className={styles.details}>Item weight (g)</span>
            <span className={styles.details}>{data.weight}</span>
          </p>
          <p className={styles.item}>
            <span className={styles.details}>Dimensions (cm)</span>
            <span className={styles.details}>{data.width}</span>
          </p>
          <p className={styles.item}>
            <span className={styles.details}>Item model number</span>
            <span className={styles.details}>{data.model_code}</span>
          </p>
          <p className={styles.item}>
            <span className={styles.details}>Colour</span>
            <span className={styles.details}>{data.colour}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

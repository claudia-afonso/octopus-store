import Image from "next/image"
import { Product } from "../../src/__generated__/graphql"
import Counter from "../Counter"
import styles from "./Product.module.scss"
import { useProductCartContext } from "../../pages/product/context/useProductCartContext"
import { useState } from "react"

type ProductCardProps = {
  data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { update } = useProductCartContext()
  const [addProduct, setAddProduct] = useState(1)

  return (
    <div className={styles.card}>
      <div className={styles.cardItems}>
        <Image className={styles.image} src={data.img_url} alt={data.name} width={375} height={375} />
      </div>

      <div className={styles.cardItems}>
        <h1 className={styles.title}>{data.name}</h1>
        <p className={styles.subtitle}>{`${data.power} // Packet of ${data.quantity}`}</p>

        <div className={styles.productInfo}>
          <div className={styles.amount}>
            <p className={styles.price}>£{data.price}</p>
            <Counter setAddProduct={setAddProduct} addProduct={addProduct} />
          </div>
          <button
            className={styles.button}
            onClick={() =>
              update([
                {
                  id: data.id,
                  amount: addProduct
                }
              ])
            }
          >
            Add to cart
          </button>
        </div>

        <div className={`${styles.section} ${styles.sectionLight}`}>
          <h3 className={styles.sectionTitle}>Description</h3>
          <p className={styles.descriptionContent}>{data.description}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Specifications</h3>
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

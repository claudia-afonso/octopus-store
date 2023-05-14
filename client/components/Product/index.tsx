import Image from "next/image"
import { Product } from "../../src/__generated__/graphql"
import styles from "./Product.module.scss"
import Counter from "../Counter"

export default function ProductCard({ data }: { data: Product }) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={data.img_url} alt={data.name} width={375} height={375} />
      <h1 className={styles.title}>{data.name}</h1>
      <p className={styles.subtitle}>{`${data.power} // Packet of ${data.quantity}`}</p>
      <div className={styles.productInfo}>
        <div className={styles.amount}>
          <p className={styles.price}>£{data.price}</p>
          <Counter />
        </div>
        <button className={styles.button}>Add to cart</button>
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
  )
}
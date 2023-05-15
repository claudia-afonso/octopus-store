import { Dispatch, SetStateAction } from "react"
import styles from "./Counter.module.scss"

type CounterProps = {
  addProduct: number
  setAddProduct: Dispatch<SetStateAction<number>>
}

const Counter: React.FC<CounterProps> = ({ addProduct, setAddProduct }) => {
  return (
    <div className={styles.counter}>
      <label className={styles.label}>Qty</label>
      <div className={styles.actions}>
        <button
          className={styles.button}
          onClick={() => setAddProduct(addProduct > 0 ? addProduct - 1 : addProduct)}
          disabled={addProduct === 1}
        >
          -
        </button>
        <p className={styles.amount}>{addProduct}</p>
        <button className={styles.button} onClick={() => setAddProduct(addProduct + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter

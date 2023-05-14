import { useState } from "react"
import styles from "./Counter.module.scss"

export default function Counter() {
  const [amount, setAmount] = useState<number>(1)
  return (
    <div className={styles.counter}>
      <label className={styles.label}>Qty</label>
      <div className={styles.actions}>
        <button
          className={styles.button}
          onClick={() => setAmount(amount > 0 ? amount - 1 : amount)}
          disabled={amount === 1}
        >
          -
        </button>
        <p className={styles.amount}>{amount}</p>
        <button className={styles.button} onClick={() => setAmount(amount + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

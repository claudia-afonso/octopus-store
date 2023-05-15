import { Dispatch, SetStateAction } from "react"
import styles from "./Counter.module.scss"

type CounterProps = {
  amount: number
  setAmount: Dispatch<SetStateAction<number>>
}

const Counter: React.FC<CounterProps> = ({ amount, setAmount }) => {
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
        <p className={styles.amount} title='Current quantity'>
          {amount}
        </p>
        <button className={styles.button} onClick={() => setAmount(amount + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter

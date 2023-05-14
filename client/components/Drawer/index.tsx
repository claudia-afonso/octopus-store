import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import close from "../../public/close.svg"
import styles from "./Drawer.module.scss"

type DrawerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  return (
    <div className={`${styles.drawer} ${isOpen ? styles.opened : ""}`}>
      <div className={styles.closeWrapper}>
        <button className={styles.close} onClick={() => setIsOpen(!isOpen)}>
          <Image src={close} alt='Close' width={18} height={18} />
        </button>
      </div>
      <div className={styles.content}>Content here</div>
    </div>
  )
}

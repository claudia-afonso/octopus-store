import Image from "next/image"
import styles from "./Header.module.scss"
import icon from "../../public/basket.svg"
import Drawer from "../Drawer"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.ctaContainer}>
            <a href='#' className={styles.logoCta}>
              <Image
                src='https://static.octopuscdn.com/logos/logo.svg'
                alt='Octopus Energy Logo'
                width={230}
                height={33}
              />
            </a>
          </div>
          <div className={styles.ctaContainer}>
            <button className={styles.cartCta} onClick={() => setIsOpen(!isOpen)}>
              <Image src={icon} alt='Shopping cart' width={25} height={25} />
            </button>
          </div>
        </div>
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

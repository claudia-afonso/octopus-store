import Image from "next/image"
import styles from "./Header.module.scss"
import icon from "../../public/basket.svg"

export default function Header() {
  return (
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
          <button className={styles.cartCta}>
            <Image src={icon} alt='Shopping cart' width={25} height={25} />
          </button>
        </div>
      </div>
    </header>
  )
}

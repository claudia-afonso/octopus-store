import Image from "next/image"
import styles from "./index.module.scss"

export default function Home() {
  return (
    <main>
      <div className='home'>
        <figure>
          <Image
            src='https://static.octopuscdn.com/logos/logo.svg'
            alt='Octopus Energy Logo'
            width={470}
            height={67}
            priority={false}
          />
        </figure>
        <h1>Welcome to the Octopus Energy store!</h1>
        <p>
          Get started by visiting our{" "}
          <a href='product' className={styles.link}>
            Products page
          </a>
        </p>
      </div>
    </main>
  )
}

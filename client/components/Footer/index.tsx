import styles from "./Footer.module.scss"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Octopus Energy Ltd is a company registered in England and Wales. Registered number: 09263424. Registered office:
        UK House, 5th floor, 164-182 Oxford Street, London, W1D 1NN.
      </p>
    </footer>
  )
}

export default Footer

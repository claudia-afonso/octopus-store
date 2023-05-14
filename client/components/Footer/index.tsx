import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        OCTOPUS ENERGY ITALIA S.R.L. - Società a Responsabilità Limitata P.IVA 01771990445 Capitale Sociale I.V.
        100.000,00 € | Copyright © 2022 Octopus Energy Italia Srl. Tutti i diritti riservati. Società soggetta
        all&apos;attività di direzione e coordinamento di Octopus Energy Group Limited.
      </p>
    </footer>
  )
}

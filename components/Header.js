import styles from '../styles/header.module.css'

export default function Header({ children }) {
  return (
    <div className={styles.header}>
      <div className={styles.mountain1} />
      <div className={styles.mountain2} />
      <div className={styles.blurlauer} />
      <div className={styles.mountain3} />
      <div className={styles.mountain4} />
      <div className={styles.mountain5} />
      <div className={styles.mountain6} />
      <h1 className={styles.title}>
        FronTeck
      </h1>
      <p className={styles.text}>
        Just a notepad for amateur web developers
      </p>
      {children}
    </div>
  )
}


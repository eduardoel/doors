import styles from "../styles/Gift.module.css"

export default function Gift() {
    return (
        <div className={styles.gift}>
            <div className={styles.giftCap}></div>
            <div className={styles.giftBody}></div>
            <div className={styles.giftLoopa}></div>
            <div className={styles.giftLoopb}></div>
        </div>
    )
}
import styles from './ShiningEffect.module.css'
export default function ShiningEffect({ children }) {
    return (
        <div className={`${styles["shine-hope-anim"]}`}>
            {children}
        </div>
    )
}

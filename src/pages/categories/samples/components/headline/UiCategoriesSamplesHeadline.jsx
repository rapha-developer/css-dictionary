
import styles from './style.module.css'
function UiCategoriesSamplesHeadline({title, description}) {
    return (
        <div className={styles.uiCategories__headline}>
            <h3 className={`${styles.uiCategories__title} capitalize`}>{title} documentation</h3>
            <p className={styles.uiCategories__description}>{description}</p>
        </div>
    )
}
export default UiCategoriesSamplesHeadline
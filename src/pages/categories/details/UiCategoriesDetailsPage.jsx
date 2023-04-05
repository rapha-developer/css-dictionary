
import styles from './style.module.css'
function UiCategoriesDetailsPage({title, description, sample}) {

    return (
        <section className={styles.uiCategoriesDetails}>
            <div className={styles.uiCategoriesDetails__head}>
                <h2 className={`${styles.uiCategories__title} capitalize`}>{title}</h2>
                <p className={styles.uiCategories__description}>{description}</p>
            </div>
            <div className={styles.uiCategoriesDetails__body}>
                <h3 className={styles.uiCategoriesExample__title}>{sample.title}</h3>
                <p className={styles.uiCategoriesExample__description}>{sample.description}</p>
                <div className={styles.uiCategoriesExample__sample}></div>
            </div>
        </section>
    )
}
export default UiCategoriesDetailsPage
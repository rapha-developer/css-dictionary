
import { useParams, useLoaderData } from 'react-router-dom'
import styles from './style.module.css'
function UiCategoriesDetailsPage() {
    const snippetCollection = useLoaderData();
    const { propertyID } = useParams()
    const snippet = snippetCollection.samples.find(snippetItem => snippetItem.id === propertyID)
    return (
        <section className={styles.uiCategoriesDetails}>
            <div className={styles.uiCategoriesDetails__head}>
                <h2 className={`${styles.uiCategories__title} capitalize`}>{snippet.title}</h2>
                <p className={styles.uiCategories__description}>{snippet.description}</p>
            </div>
            <div className={styles.uiCategoriesDetails__body}>
                <h3 className={styles.uiCategoriesExample__title}>{snippet.sample.title}</h3>
                <p className={styles.uiCategoriesExample__description}>{snippet.sample.description}</p>
                <div className={styles.uiCategoriesExample__sample}></div>
            </div>
        </section>
    )
}

export default UiCategoriesDetailsPage

import UiLoading from '../../../components/ui/loading/UiLoading'; 
import { useParams, useLoaderData } from 'react-router-dom'
import styles from './style.module.css'
import { lazy, Suspense, useState } from 'react'

function UiCategoriesDetailsPage() {
    const snippetCollection = useLoaderData();
    const { category, propertyName, propertyID } = useParams()
    const snippet = snippetCollection.samples.find(snippetItem => snippetItem.id === propertyID)
    
    function importComponentByLazy(category, propertyName, propertyID) {
        const ImportedComponent = lazy(() => import(`../../../library/${category}/a/${propertyName}/sample${propertyID}/Sample.jsx`))
        return ImportedComponent
    }
    const ComponentSample = importComponentByLazy(category, propertyName, propertyID)
    return (
        <section className={styles.uiCategoriesDetails}>
            <div className={styles.uiCategoriesDetails__head}>
                <h2 className={`${styles.uiCategories__title} capitalize`}>{snippet.title}</h2>
                <p className={styles.uiCategories__description}>{snippet.description}</p>
            </div>
            <div className={styles.uiCategoriesDetails__body}>
                <h3 className={styles.uiCategoriesExample__title}>{snippet.sample.title}</h3>
                <p className={styles.uiCategoriesExample__description}>{snippet.sample.description}</p>
                <div className={styles.uiCategoriesExample__sample}>
                    <Suspense fallback={<UiLoading />}>
                        <ComponentSample />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default UiCategoriesDetailsPage
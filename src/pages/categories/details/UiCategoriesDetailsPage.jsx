
import UiLoading from '../../../components/ui/loading/UiLoading'; 
import { useParams, useLoaderData } from 'react-router-dom'
import styles from './style.module.css'
import { lazy, Suspense, useState } from 'react'

function UiCategoriesDetailsPage() {
    const responseSingleSample = useLoaderData();
    const { category, propertyName, propertyID } = useParams()
    
    function importComponentByLazy(category, propertyName, propertyID) {
        const ImportedComponent = lazy(() => import(`../../../library/${category}/a/${propertyName}/sample${propertyID}/Sample.jsx`))
        return ImportedComponent
    }
    const ComponentSample = importComponentByLazy(category, propertyName, propertyID)
    return (
        <section className={styles.uiCategoriesDetails}>
            <div className={styles.uiCategoriesDetails__head}>
                <h2 className={styles.uiCategories__title}>
                    {responseSingleSample.data.attributes.title}
                </h2>
                <p className={styles.uiCategories__description}>
                    {responseSingleSample.data.attributes.description}
                </p>
            </div>
            <div className={styles.uiCategoriesDetails__body}>
                <h3 className={styles.uiCategoriesExample__title}>
                    {responseSingleSample.data.display.title}
                </h3>
                <p className={styles.uiCategoriesExample__description}>
                    {responseSingleSample.data.display.description_pt}
                </p>
                <div className={styles.uiCategoriesExample__sample}>
                    <Suspense fallback={<UiLoading />}>
                        <ComponentSample />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}
export async function loader({ params }) {
    const url = `https://rapha-developer-laravel.000webhostapp.com/properties/${params.propertyName}/singleSample/${params.propertyID}`;
    const responseFromApi = await fetch(url);
	const responseInJson = await responseFromApi.json();
    return responseInJson
}

export default UiCategoriesDetailsPage
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import { createSampleOfProperties } from '../../../data/samples/createSampleOfProperties'
import { lazy, Suspense} from 'react'
import UiLoading from '../../../components/ui/loading/UiLoading'
import styles from './style.module.css'
function UiCategoriesSamples() {
    const category = useLoaderData()
    const location = useLocation()
    const params = useParams() 

    function importComponentByLazy(category, propertyName, propertyID) {
        const ImportedComponent = lazy(() => import(`../../../library/${category}/a/${propertyName}/sample${propertyID}/thumbnail/SampleThumbnail.jsx`))
        return ImportedComponent
    }

    const snippet__list = category.samples.map((snippetItem) => {
        const ComponentSample = importComponentByLazy(params.category, params.propertyName, snippetItem.id)
        const fullPath = (`${location.pathname}/${snippetItem.id}`)
        return (
            <a  href={fullPath}
                className={styles.snippetItem} key={snippetItem.id}>
                <div className={styles.snippetItem__thumbnail}>
                    <Suspense fallback={<UiLoading />}>
                        <ComponentSample />
                    </Suspense>
                </div>
                <span className={`${styles.snippetItem__date} uppercase`}>{snippetItem.date}</span>
                <h3 className={styles.snippetItem__title}>{snippetItem.title}</h3>
                <p className={styles.snippetItem__description}>{snippetItem.description}</p>
            </a>
        )
    });
    const headText = `${category.propertyName} documentation`
    return (
        <section className={styles.uiCategoriesSamples}>
            <div className={styles.uiCategoriesSamples__head}>
                <h2 className={`${styles.uiCategoriesSamples__title} capitalize`}>{headText}</h2>
            </div>
            <div className={styles.__body}>
                {snippet__list}
            </div>
        </section>
    )
}
export async function loader({ params }) {
    const snippets = createSampleOfProperties.find((sampleItem) => sampleItem.propertyName === params.propertyName)
    return snippets
}
export default UiCategoriesSamples
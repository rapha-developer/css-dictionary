import { useLoaderData, useLocation } from 'react-router-dom'
import { createSampleOfProperties } from '../../../data/samples/createSampleOfProperties'
import styles from './style.module.css'
function UiCategoriesSamples() {
    const category = useLoaderData()
    const location = useLocation() 
    const snippet__list = category.samples.map((snippetItem) => {
        const fullPath = (`${location.pathname}/${snippetItem.id}`)
        return (
            <a  href={fullPath}
                className={styles.snippetItem} key={snippetItem.id}>
                <div className={styles.snippetItem__thumbnail}></div>
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
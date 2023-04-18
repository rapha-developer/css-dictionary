
import { createStartWithEncyclopediaPage } from '../../data/encyclopedia/createEncyclopediaPage'
import { useLoaderData } from 'react-router-dom'
import UiSubject from '../../components/ui/subject/UiSubject'
import styles from './style.module.css'
function UiEncyclopediaPage() {
    const { title, items } = useLoaderData()
    const subject__items = items.map((subject) => {
        return (
            <UiSubject 
                key={subject.title}
                title={subject.title}
                collection={subject.collection}
            />
        )
    });
    return (
        <section className={styles.UiEncyclopediaPage}>
            <h2 className={styles.UiEncyclopediaPage__title}>{title}</h2>
            {subject__items}
        </section>
    )
}
export async function loader({ params }) {
    return createStartWithEncyclopediaPage.find((encyclopediaPart) => encyclopediaPart.slug === params.categorySlug)
}
export default UiEncyclopediaPage
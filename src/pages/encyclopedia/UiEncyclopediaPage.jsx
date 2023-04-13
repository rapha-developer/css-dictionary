
import UiSubject from '../../components/ui/subject/UiSubject'
import styles from './style.module.css'
function UiEncyclopediaPage({title, collection}) {

    const subject__items = collection.map((subject) => {
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
export default UiEncyclopediaPage
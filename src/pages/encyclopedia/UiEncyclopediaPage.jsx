
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
                letter={subject.letter}
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
    const alphabet = alphabetData()
    const url = alphabet[params.categorySlug].url

    const response = await fetch(url);
    const responseInJson = await response.json();
    return {
        title: alphabet[params.categorySlug].title,
        items: responseInJson.data
    }
}
export function alphabetData() {
    return {
        "css-properties": {
            title: "CSS Properties",
            url: `https://rapha-developer-laravel.000webhostapp.com/properties/alphabet`
        },
        "css-functions": {
            title: "CSS Functions",
            url: `https://rapha-developer-laravel.000webhostapp.com/properties/functions/alphabet`
        }
    }
}
export default UiEncyclopediaPage
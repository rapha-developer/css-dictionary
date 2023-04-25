
import styles from './style.module.css'
function UiHeadBarAutocomplete({items}) {
    const autocomplete__items = items.map((item, key) => {
        const url = `/ref/${item.category}/${item.slug}`
        return (
            <li className={styles.uiHeadBarAutocomplete__item} key={key}>
                <a href={url} className={styles.uiHeadBarAutocomplete__link}>{item.slug}</a>
            </li>
        )
    });
    return ( 
        <ul className={styles.uiHeadBarAutocomplete}>
            {autocomplete__items}
        </ul>
    )
}
export default UiHeadBarAutocomplete
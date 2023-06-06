
import styles from './style.module.css'
function UiHeadBarAutocomplete({items}) {
    const noPropertyFound = (items.length === 0) ? true : false
    const autocomplete__items = items.map((item, key) => {
        const url = `/ref/${item.slug.category}/${item.slug.name}`
        return (
            <li className={styles.uiHeadBarAutocomplete__item} key={item.id}>
                <a href={url} 
                    className={styles.uiHeadBarAutocomplete__link}>{item.attributes.name}</a>
            </li>
        )
    });
    function generateNoPropertyResponse() {
        const noPropertyText = "No property is found"
        return (
            <li className={styles.uiHeadBarAutocomplete__item} data-disable="true">
                <a href="" className={styles.uiHeadBarAutocomplete__link}>{noPropertyText}</a>
            </li>
        )
    }
    return ( 
        <ul className={styles.uiHeadBarAutocomplete}>
            {autocomplete__items}
            {noPropertyFound && generateNoPropertyResponse()}
        </ul>
    )
}
export default UiHeadBarAutocomplete
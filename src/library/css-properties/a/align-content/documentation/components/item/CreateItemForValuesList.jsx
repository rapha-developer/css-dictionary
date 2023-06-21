
import styles from './style.module.css'
function CreateItemForValuesList({title, description}) {
    return (
        <li className={styles['uiPropDoc__item--values']}>
            <span className={styles.uiPropDoc__itemBadge}>{title}</span>
            <p className={styles.uiPropDoc__itemText}>{description}</p>
        </li>
    )
}
export default CreateItemForValuesList
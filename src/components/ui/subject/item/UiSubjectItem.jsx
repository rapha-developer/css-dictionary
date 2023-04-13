import { FcDocument } from 'react-icons/fc'
import styles from './style.module.css'
function UiSubjectItem({url, name, color}) {
    return (
        <li className={styles.subject__item} 
            data-color={color}>
            <a href={url} className={styles.subject__link}>
                <FcDocument 
                    className={styles.subject__icon} 
                /> {name}
            </a>
        </li>
    )
}
export default UiSubjectItem
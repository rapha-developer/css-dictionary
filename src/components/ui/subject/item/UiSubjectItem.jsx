import { FcDocument } from 'react-icons/fc'
import styles from './style.module.css'
import { useLocation } from 'react-router-dom'
function UiSubjectItem({slug, name, color}) {
    const actualLocation = useLocation()
    const fullPath = `${actualLocation.pathname}/${slug}`
    return (
        <li className={styles.subject__item} 
            data-color={color}>
            <a href={fullPath} className={styles.subject__link}>
                <FcDocument 
                    className={styles.subject__icon} 
                /> {name}
            </a>
        </li>
    )
}
export default UiSubjectItem
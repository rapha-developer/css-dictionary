import { VscCircle } from 'react-icons/vsc'
import styles from './style.module.css'
function UiAccordionItem(props) {
    return (
        <li className={styles.accordionMenuItem}>
            <a href={props.url} className={`${styles.accordionMenuLink} capitalize`}><VscCircle className={styles.accordionCircleIcon} strokeWidth="1" data-color={props.iconColor} /> {props.name}</a>
        </li>
    )
}
export default UiAccordionItem
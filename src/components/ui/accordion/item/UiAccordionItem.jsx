import { VscCircle } from 'react-icons/vsc'
import styles from './style.module.css'
function UiAccordionItem(props) {

    return (
        <li className={styles.accordionMenu__item}>
            <a  href={props.url} 
                className={`${styles.accordionMenu__link} ${props.format}`}><VscCircle className={styles.accordionCircle__icon} strokeWidth='1' data-color={props.icon} /> {props.name}
            </a>
        </li>
    )
}
export default UiAccordionItem
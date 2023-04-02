import { BsFillClockFill, BsFillHeartFill } from 'react-icons/bs'
import styles from './style.module.css'
function UiSidebarGroupItem(props) {

    const icon = (props.icon === "heart") ? 
        <BsFillHeartFill className={styles.sidebarGroup__icon} /> :
        <BsFillClockFill className={styles.sidebarGroup__icon} />  
    return (
        <li className={styles.sidebarGroup__item}>
            <a  href={props.url}
                key={`group-item-${props.icon}`}
                className={`${styles.sidebarGroup__link} capitalize`} >
                {icon}
                {props.name}
            </a>
        </li>
    )
}
export default UiSidebarGroupItem
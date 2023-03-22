import { AiTwotoneHeart } from 'react-icons/ai'
import { BsFillClockFill } from 'react-icons/bs'
import styles from './style.module.css'
function UiSidebarGroupItem(props) {
    const clock = "clock"
    const icon = (props.iconType === clock) ? <BsFillClockFill className={styles.__icon} /> : <AiTwotoneHeart className={styles.__icon} />
    return (
        <li className={styles.__item}>
            <a href={props.url} className={`${styles.__link} capitalize`}>{icon} {props.name}</a>
        </li>
    )
}
export default UiSidebarGroupItem
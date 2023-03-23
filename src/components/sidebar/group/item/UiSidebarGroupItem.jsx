import { AiTwotoneHeart } from 'react-icons/ai'
import { BsFillClockFill } from 'react-icons/bs'
import styles from './style.module.css'
function UiSidebarGroupItem(props) {
    function defineIconType() {
        return (props.iconType === "clock") ? <BsFillClockFill className={styles.__icon} /> : <AiTwotoneHeart className={styles.__icon} />
    }
    const icon = defineIconType()
    return (
        <li className={styles.__item}>
            <a href={props.url} className={`${styles.__link} capitalize`}>{icon} {props.name}</a>
        </li>
    )
}
export default UiSidebarGroupItem
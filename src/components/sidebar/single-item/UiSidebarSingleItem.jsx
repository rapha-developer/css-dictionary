import { BsArchiveFill } from 'react-icons/bs'
import styles from './style.module.css'
function UiSidebarSingleItem(props) {
    const icon = (props.iconType === "archive") ? <BsArchiveFill className={styles.__icon} /> : "" 
    return (
        <div className={styles.__item}>
            <a href={props.url} className={`${styles.__link} capitalize`}>{icon} {props.name}</a>
        </div>
    )
}
export default UiSidebarSingleItem
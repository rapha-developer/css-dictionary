import { AiOutlinePlus } from 'react-icons/ai'
import styles from './style.module.css'
function UiButtonBar({url, text}) {

    return (
        <a href={url} 
            className={styles.uiButtonBar}><AiOutlinePlus  className={styles.uiButtonBar__icon} /> {text}</a>
    )
}
export default UiButtonBar
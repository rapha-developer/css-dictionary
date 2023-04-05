
import styles from './style.module.css'
function UiHeadBarForm(props) {
    return (
        <input
            id={"ui-head-bar-input-id"}
            name={"ui-head-bar-input-name"}
            placeholder={"search"}
            type={"text"}
            className={styles.UiHeadBarForm__input}
        />
    )
}
export default UiHeadBarForm
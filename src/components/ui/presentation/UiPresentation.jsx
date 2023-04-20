
import styles from './style.module.css'
function UiPresentation({component}) {
    return (
        <div className={styles.uiPresentation}
            role='presentation'>
            {component}
        </div>
    )
}
export default UiPresentation

import boxboardLogo from '../../assets/boxboard-logo.svg'
import styles from './style.module.css'
function UiSidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__head}>
                <img src={boxboardLogo} 
                alt="Boxboard logo" 
                className={styles.sidebar__logo} />
            </div>
            <div className="sidebar__body">

            </div>
        </div>
    )
}
export default UiSidebar
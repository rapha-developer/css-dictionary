import { AiOutlineMenu } from 'react-icons/ai'
import styles from './style.module.css'
function UiButtonMenu({isShowSidebar, changeIsShowSidebar}) {
    
    return (
        <button className={styles.uiButtonMenu}
        data-visible={isShowSidebar}
        onClick={changeIsShowSidebar}>
            <AiOutlineMenu />
    </button>
    )
}
export default UiButtonMenu

import { createUiButtonBar } from '../../data/headBar'
import UiButtonBar from '../ui/button/bar/UiButtonBar'
import UiButtonMenu from '../ui/button/menu/UiButtonMenu'
import UiHeadBarForm from './form/UiHeadBarForm'
import styles from './style.module.css'

function UiHeadBar({headline, isShowSidebar, changeIsShowSidebar}) {

    return (
        <section className={styles.uiHeadBar}
                id="uiHeadBarID">
            <div className={styles.uiHeadBar__row}>
                <div className={styles.uiHeadBar__head}>
                    <h1 className={`${styles.uiHeadBar__headline} capitalize`}>{headline}</h1>
                    <UiHeadBarForm />
                </div>
                <div className={styles.uiHeadBar__body}>
                    <UiButtonBar 
                        url={createUiButtonBar.url}
                        text={createUiButtonBar.text}
                    />
                    <UiButtonMenu 
                        isShowSidebar={isShowSidebar}
                        changeIsShowSidebar={changeIsShowSidebar}
                    />
                </div>
            </div>
        </section>
    )
}
export default UiHeadBar

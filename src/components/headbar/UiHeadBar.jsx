
import { createUiButtonBar } from '../../data/headBar'
import UiButtonBar from '../ui/button/bar/UiButtonBar'
import UiButtonMenu from '../ui/button/menu/UiButtonMenu'
import UiHeadBarForm from './form/UiHeadBarForm'
import styles from './style.module.css'

function UiHeadBar(props) {
    const headline = (props.headline) ? props.headline : "categories details"

    return (
        <section className={styles.uiHeadBar}>
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
                        isShowSidebar={props.isShowSidebar}
                        changeIsShowSidebar={props.changeIsShowSidebar}
                    />
                </div>
            </div>
        </section>
    )
}
export default UiHeadBar

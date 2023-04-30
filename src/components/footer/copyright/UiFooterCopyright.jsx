
import { createUiFooterCopyright } from '../../../data/footer'
import styles from './style.module.css'
function UiFooterCopyright() {
    return (
        <div className={styles.uiFooterCopyright}>
            <p className={styles.UiFooterCopyright__text}>
                {createUiFooterCopyright.text}
            </p>
            <p className={styles.UiFooterCopyright__inspired}>
                Inspired by <a href={createUiFooterCopyright.jekyll.url} className={styles.UiFooterInspired__link}>{createUiFooterCopyright.jekyll.name}</a> and <a href={createUiFooterCopyright.boxboard.url} className={styles.UiFooterInspired__link}>{createUiFooterCopyright.boxboard.name}</a>
            </p>
        </div>
    )
}
export default UiFooterCopyright
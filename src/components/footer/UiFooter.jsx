import styles from './style.module.css'
import UiFooterProjects from './projects/UiFooterProjects'
import UiFooterSocialMedia from './socialMedia/UiFooterSocialMedia'
import UiFooterCopyright from './copyright/UiFooterCopyright'
function UiFooter() {

    return (
        <footer className={styles.uiFooter}>
            <UiFooterProjects />
            <UiFooterSocialMedia />
            <UiFooterCopyright />
        </footer>
    )
}
export default UiFooter

import styles from './style.module.css'
function UiFooterProjectsItem({url, name, haveDivider}) {
    return (
        <a href={url} 
            target='_blank'
            className={styles.UiFooterProjects__link}>
            {haveDivider && <span className={styles.UiFooterProjects__trace}>|</span>}
            <p className={styles.UiFooterProjects__name}>{name}</p>
        </a>
    )
}
export default UiFooterProjectsItem
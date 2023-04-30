
import UiFooterProjectsItem from './item/UiFooterProjectsItem'
import { createUiFooterProjects } from '../../../data/footer'
import styles from './style.module.css'
function UiFooterProjects() {
    const projects__collection = createUiFooterProjects.map((projectItem, key) => {
        const isFirstItem = (key === 0) ? true : false 
        return (
            <UiFooterProjectsItem 
                key={key}
                url={projectItem.url}
                name={projectItem.name}
                haveDivider={!isFirstItem}
            />
        )
    })
    return (
        <div className={styles.UiFooterProjects__list}>
            {projects__collection}
        </div>
    )
}
export default UiFooterProjects
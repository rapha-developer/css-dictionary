import { BiChevronRight } from 'react-icons/bi'
import styles from './style.module.css'
function UiHistoricPath({paths}) {
    const path__list = paths.map((pathItem) => {
        const isLastPathItem = (pathItem.url === "current") ? true : false
        return (
            <div className={styles.uiHistoricPath__item} 
                key={pathItem.name}>                
                {!isLastPathItem && 
                    <a href={pathItem.url} 
                    className={`${styles.uiHistoricPath__link} capitalize`}>{pathItem.name}</a>
                }
                {!isLastPathItem && 
                    <span className={styles.uiHistoricPath__icon}><BiChevronRight /></span>
                }
                {isLastPathItem && 
                    <span className={`${styles.uiHistoricPath__lastItem} capitalize`}>{pathItem.name}</span>}
            </div>
        )
    });
    return (
        <div className={styles.uiHistoricPath}>
            {path__list}
        </div>
    )
}
export default UiHistoricPath
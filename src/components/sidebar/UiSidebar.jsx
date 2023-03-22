import boxboardLogo from '../../assets/boxboard-logo.svg'
import styles from './style.module.css'
import UiAccordion from '../ui/accordion/UiAccordion'
import { createFirstAccordionData, createFirstSidebarGroupData } from '../../data/constants'
import UiSidebarGroup from './group/UiSidebarGroup'
function UiSidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__head}>
                <img src={boxboardLogo} 
                alt="Boxboard logo" 
                className={styles.sidebar__logo} />
            </div>
            <div className={styles.sidebar__body}>
                <UiSidebarGroup 
                    items={createFirstSidebarGroupData}
                />
                <UiAccordion 
                    items={createFirstAccordionData}
                />
            </div>
        </div>
    )
}
export default UiSidebar
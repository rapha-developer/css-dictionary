import boxboardLogo from '../../assets/boxboard-logo.svg'
import styles from './style.module.css'
import UiAccordion from '../ui/accordion/UiAccordion'
import { createFirstAccordionData, createFirstSidebarGroupData, createSecondAccordionData } from '../../data/constants'
import UiSidebarGroup from './group/UiSidebarGroup'
import UiSidebarSingleItem from './single-item/UiSidebarSingleItem'
import SmartphoneWithGraphics from '../../assets/smartphone-with-graphics.png'
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
                <UiAccordion
                    title="my tags"
                    iconMain="tags"
                    format="lowercase"
                    items={createSecondAccordionData}
                />
                <UiSidebarSingleItem 
                    url="#"
                    iconType="archive"
                    name="archive"
                />
            </div>
            <div className={styles.sidebar__tail}>
                <img src={SmartphoneWithGraphics} 
                    alt="Illustration of a Smartphone with nice graphics." 
                    className={styles.sidebar__image}
                />
            </div>
        </div>
    )
}
export default UiSidebar
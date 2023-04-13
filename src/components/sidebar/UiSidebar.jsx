import UiSidebarGroup from "./group/UiSidebarGroup";
import UiAccordion from "../ui/accordion/UiAccordion";
import SidebarLogo from '../../assets/boxboard-logo.svg'
import { createFirstAccordionData, 
		createSecondAccordionData,	
		createSidebarGroupData,
		createItemsDataToSingleItem,
		createOrdinalItems } from '../../data/sidebar'
import styles from "./style.module.css";
import UiSidebarSingleItem from "./single-item/UiSidebarSingleitem";

function UiSidebar(props) {
	return (
		<aside className={styles.sidebar} data-visible={props.isShowSidebar}>
			<div className={styles.sidebar__head}>
				<img src={SidebarLogo} 
					alt="Boxboard logo"
					className="sidebar__logo" />
			</div>
			<div className={styles.sidebar__body}>
				<UiSidebarGroup 
					title={createSidebarGroupData.title}
					items={createSidebarGroupData.items}
				/>
				<UiAccordion 
					title={createFirstAccordionData.title}
					format={createFirstAccordionData.format}
					type={createFirstAccordionData.type}
					items={createFirstAccordionData.items}
				/>
				<UiAccordion 
					title={createSecondAccordionData.title}
					format={createSecondAccordionData.format}
					type={createSecondAccordionData.type}
					items={createSecondAccordionData.items}
				/>
				<UiSidebarSingleItem 
					item={createItemsDataToSingleItem[createOrdinalItems.first]}
				/>
				<UiSidebarSingleItem 
					item={createItemsDataToSingleItem[createOrdinalItems.second]}
				/>
                <button className={styles.sidebar__close}
                    onClick={props.changeIsShowSidebar}>X</button>
            </div>
		</aside>
	);
}
export default UiSidebar;
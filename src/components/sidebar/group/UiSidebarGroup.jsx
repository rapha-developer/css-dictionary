import UiSidebarGroupItem from "./item/UiSidebarGroupItem";
import styles from "./style.module.css";
function UiSidebarGroup(props) {
    
    const sidebar__items = props.items.map((item, key) => {
        return (
            <UiSidebarGroupItem 
                key={`sidebar-group-${item.name}`}
                url={item.url}
                name={item.name}
                icon={item.icon}
            />
        )
    });
	return (
		<div className={styles.sidebar__group}>
			<h4 className={`${styles.sidebarGroup__title} uppercase`}>{props.title}</h4>
			<ul className={styles.sidebarGroup__list}>
				{sidebar__items}
			</ul>
		</div>
	);
}
export default UiSidebarGroup

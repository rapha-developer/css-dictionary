import { AiTwotoneHeart } from 'react-icons/ai'
import { BsFillClockFill } from 'react-icons/bs'
import UiSidebarGroupItem from './item/UiSidebarGroupItem';

import styles from './style.module.css'
function UiSidebarGroup(props) {
    const sidebarGroupData = props.items
    const sidebarGroup__items = sidebarGroupData.options.map((item) => {
        return (
            <UiSidebarGroupItem 
                key={item.name}
                name={item.name}
                url={item.url}
                iconType={item.iconType}
            />
        )
    });
    return (
        <div className={styles.sidebar__group}>
            <h4 className={`${styles.first__heading} uppercase`}>{sidebarGroupData.title}</h4>
            <ul className={styles.first__list}>
                {sidebarGroup__items}
            </ul>
        </div>
    )
}
export default UiSidebarGroup
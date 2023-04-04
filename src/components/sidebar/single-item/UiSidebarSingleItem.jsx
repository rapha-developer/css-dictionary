import { BsArchiveFill, BsCollection  } from 'react-icons/bs'
import { FiLayers } from 'react-icons/fi'
import { RiContactsFill } from 'react-icons/ri'
import { createItemsDataToSingleItem } from '../../../data/sidebar'
import styles from './style.module.css'
function UiSidebarSingleItem(props) {
    const { name, url, type } = props.item
    const collectionOfIcons = [ 
        <BsArchiveFill className={styles.singleItem__icon} />, 
        <FiLayers className={styles.singleItem__icon} />,
        <RiContactsFill  className={styles.singleItem__icon} />
    ]
    const foundIconIndex = createItemsDataToSingleItem.findIndex((element) => element.type === type)
    const icon = collectionOfIcons[foundIconIndex]
    return ( 
        <div className={styles.singleItem}>
            <a href={url} 
                className={`${styles.singleItem__link} capitalize`}>
                {icon} {name}
            </a>
        </div>
    )
}
export default UiSidebarSingleItem

import { IoSettingsOutline, IoLibraryOutline, IoCopyOutline } from 'react-icons/io5'
import { createUiHomeFeatures } from '../../../../data/home/createFeatureHome'
import styles from './style.module.css'
function UiHomeFeaturesItem({title, description, icon}) {
    const collectionIcons = [
        <IoSettingsOutline className={styles.featureItem__image} />,
        <IoLibraryOutline className={styles.featureItem__image} />,
        <IoCopyOutline className={styles.featureItem__image} />
    ]
    const iconPosition = createUiHomeFeatures.items.findIndex((featureItem) => featureItem.icon === icon)
    return (
        <div className={styles.uiHomeFeaturesItem}>
            {collectionIcons[iconPosition]}
            <h4 className={styles.featureItem__title}>{title}</h4>
            <p className={styles.featureItem__description}>{description}</p>
        </div>
    )
}
export default UiHomeFeaturesItem
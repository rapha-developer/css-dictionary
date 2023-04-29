
import { createUiHomeFeatures } from '../../../data/home/createFeatureHome'
import UiHomeFeaturesItem from './item/UiHomeFeaturesItem';
import styles from './style.module.css'
function UiHomeFeatures() {
    const features__items = createUiHomeFeatures.items.map((featureDataItem, key) => {
        return (
            <UiHomeFeaturesItem 
                key={key}
                title={featureDataItem.title}
                description={featureDataItem.description}
                icon={featureDataItem.icon}
            />
        )
    });

    return (
        <div className={styles.UiHomeFeatures}  id='uiHomeFeaturesSection'>
            <div className={styles.UiHomeFeatures__head}>
                <h3 className={styles.UiHomeFeatures__headline}>{createUiHomeFeatures.headline}</h3>
                <p className={styles.UiHomeFeatures__description}>
                    {createUiHomeFeatures.description}
                </p>
            </div>
            <div className={styles.UiHomeFeatures__body}>
                {features__items}
            </div>
        </div>
    )
}
export default UiHomeFeatures
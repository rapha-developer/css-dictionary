import { GoClock } from 'react-icons/go'
import styles from './style.module.css'
function UiCategoriesSamplesLabels({categoryLabel = "category", category, createdLabel = "date",created_at}) {
    return (
        <div className={styles.uiCategoriesSamples__labels}>
            <div className={styles.uiSamplesLabels__item}>
                <h4 className={`${styles.samplesLabels__title} uppercase`}>{categoryLabel}</h4>
                <p className={styles.samplesLabels__category}>{category}</p>
            </div>
            <div className={styles.uiSamplesLabels__item}>
                <h4 className={`${styles.samplesLabels__title} uppercase`}>{createdLabel}</h4>
                <p className={`${styles.samplesLabels__created} capitalize`}>
                    <GoClock className={styles.samplesLabels__icon} /> {created_at}
                </p>
            </div>
        </div>
    )
}
export default UiCategoriesSamplesLabels
import { FcReading, FcDocument  } from 'react-icons/fc'
import styles from './style.module.css'
function UiTopic({title, collection}) {
    const topic__items = collection.map((property) => {
        return (
            <li className={styles.topicBody__item}
                key={`property-${property.name}`}>
                <a href={property.url} className={styles.topicBody__link}>
                    <FcDocument className={styles.topicItem__icon} /> {property.name}
                </a>
            </li>
        )
    });
    return (
        <div className={styles.topic}>
            <div className={styles.topic__head}>
                <FcReading  className={styles.topicHead__icon} />
                <h2 className={styles.topicHead__title}>{title}</h2>
            </div>
            <div className={styles.topic__body}>
                <ul className={styles.topicBody__collection}>
                    {topic__items}
                </ul>
            </div>
    </div>
    )
}
export default UiTopic
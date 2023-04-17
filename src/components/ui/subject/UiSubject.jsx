
import { decreaseKeyToLessThanFour } from '../../../data/functions'
import styles from './style.module.css'
import UiSubjectItem from './item/UiSubjectItem';
function UiSubject({title, collection}) {
    const propertiesWithColors = collection.map((property, key) => {
        const colors = ["blue","green","orange","red"]
        return {
            ...property,
            color: colors[decreaseKeyToLessThanFour(key)],
        }
    });
    const items = propertiesWithColors.map((property) => {
        return (
            <UiSubjectItem 
                key={property.name}
                slug={property.slug}
                color={property.color}
                name={property.name}
            />
        )
    });
    return (
        <div className={styles.subject}>
            <h3 className={styles.subject__title}>{title}</h3>
            <ul className={styles.subject__propertyList}>
                {items}
            </ul>
        </div>
    )
}
export default UiSubject
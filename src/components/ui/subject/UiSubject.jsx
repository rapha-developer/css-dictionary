
import { decreaseKeyToLessThanFour } from '../../../data/functions'
import styles from './style.module.css'
import UiSubjectItem from './item/UiSubjectItem';
import { useEffect, useState } from 'react';
function UiSubject({title, letter}) {
    const [collection, setCollection ] = useState([])
    useEffect(() => {
        const url = `https://rapha-developer-laravel.000webhostapp.com/properties/start/${letter}`
        fetch(url)
        .then(res => res.json())
        .then(response => setCollection(response.data))
        .catch(error => alert(error));

    }, []);
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
                key={property.slug.name}
                slug={property.slug.name}
                color={property.color}
                name={property.attributes.name}
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
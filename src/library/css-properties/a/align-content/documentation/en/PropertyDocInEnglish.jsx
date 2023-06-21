
import { BsTextLeft } from "react-icons/bs";
import { links } from '../data/bookmarks'
import { valuesInEnglish } from '../data/values'
import CreateItemForValuesList from "../components/item/CreateItemForValuesList"; 
import styles from './style.module.css'
function PropertyDocInEnglish({ description = "description", note = "notes", values = "values" }) {

    const valuesList = valuesInEnglish.map((item) => {
        return (
            <CreateItemForValuesList 
                key={item.option}
                title={item.option}
                description={item.description}
            />
        );
    });
    return (
        <div>
            <div className={styles.uiPropDoc__section}>
                <BsTextLeft className={styles.uiPropDoc__icon} />
                <div className={styles.uiPropDoc__information}>
                    <h4 className={`${styles.uiPropDoc__title} capitalize`}>
                        {description}
                    </h4>
                    <p className={styles.uiPropDoc__text}>
                    The <a href={links.css} target='_blank' className={styles.docReadme__link}>CSS</a> align-content property sets the distribution of space between and around content items along a <a href={links.flexBox} target='_blank' className={styles.docReadme__link}>flexbox's</a> cross-axis or a <a href={links.grid} target='_blank' className={styles.docReadme__link}>grid's</a> block axis.
                    </p>
                    <p className={styles.uiPropDoc__text}>
                        The <span className={styles.docReadme__mark}>align-content</span> property specifies how flex lines are distributed along the cross axis in a flexbox container.
                    </p>
                    <p className={styles.uiPropDoc__text}>
                        In flexbox layout, the main axis is in the <a href={links.flexDirection} target='_blank' className={styles.docReadme__link}>flex-direction</a> (default is 'row', horizontal), and the cross axis is perpendicular to the main axis (default is 'column', vertical).
                    </p>
                </div>
            </div>
            <div className={styles.uiPropDoc__section}>
                <BsTextLeft className={styles.uiPropDoc__icon} />
                <div className={styles.uiPropDoc__information}>
                    <h4 className={`${styles.uiPropDoc__title} capitalize`}>
                        {note}
                    </h4>
                    <p className={styles.uiPropDoc__text}>
                        This property has no effect on single line flex containers (i.e. ones with <span className={styles.docReadme__mark}>flex-wrap: nowrap</span>).
                    </p>
                </div>
            </div>
            <div className={styles.uiPropDoc__section}>
                <BsTextLeft className={styles.uiPropDoc__icon} />
                <div className={styles.uiPropDoc__information}>
                    <h4 className={`${styles.uiPropDoc__title} capitalize`}>
                        {values}
                    </h4>
                    <ul className={styles['uiPropDoc__list--values']}>
                        {valuesList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PropertyDocInEnglish
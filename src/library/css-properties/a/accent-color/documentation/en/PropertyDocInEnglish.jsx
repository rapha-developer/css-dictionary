
import { BsTextLeft, BsRecord } from "react-icons/bs";
import styles from './style.module.css'
function PropertyDocInEnglish({ description = "description", support = "supports", values = "values" }) {
    const links = {
        css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        accent: "https://developer.mozilla.org/en-US/docs/Glossary/Accent",
        color: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    }

    const allowedElements = [
        `<input type="checkbox">`,
        `<input type="radio">`,
        `<input type="range">`,
        `<progress>`
    ];
    const listWithAllAllowedItems = allowedElements.map((allowedItem) => {
        return (
            <li className={styles.uiPropDoc__item} key={allowedItem}>
                <BsRecord className={styles.uiPropDoc__itemIcon} />
                <div className={styles.uiPropDoc__itemText}>
                    {allowedItem}
                </div>
            </li>
        )
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
                    The accent-color <a href={links.css} target='_blank' className={styles.docReadme__link}>CSS</a> property sets the <a href={links.accent} target='_blank' className={styles.docReadme__link}>accent</a> color for user-interface controls generated by some elements.
                    </p>
                </div>
            </div>
            <div className={styles.uiPropDoc__section}>
                <BsTextLeft className={styles.uiPropDoc__icon} />
                <div className={styles.uiPropDoc__information}>
                    <h4 className={`${styles.uiPropDoc__title} capitalize`}>
                        {support}
                    </h4>
                    <p className={styles.uiPropDoc__text}>
                        Browsers that support <span className={styles.docReadme__mark}>accent-color</span> currently apply it to the following HTML elements:
                    </p>
                    <ul className={styles.uiPropDoc__list}>
                        {listWithAllAllowedItems}
                    </ul>
                </div>
            </div>
            <div className={styles.uiPropDoc__section}>
                <BsTextLeft className={styles.uiPropDoc__icon} />
                <div className={styles.uiPropDoc__information}>
                    <h4 className={`${styles.uiPropDoc__title} capitalize`}>
                        {values}
                    </h4>
                    <ul className={styles['uiPropDoc__list--values']}>
                        <li className={styles['uiPropDoc__item--values']}>
                            <span className={styles.uiPropDoc__itemBadge}>auto</span>
                            <p className={styles.uiPropDoc__text}>Represents a UA-chosen color, which should match the accent color of the platform, if any.</p>
                        </li>
                        <li className={styles['uiPropDoc__item--values']}>
                            <span className={styles.uiPropDoc__itemBadge}>color</span>
                            <p className={styles.uiPropDoc__text}>Specifies the <a href={links.color} target='_blank' className={styles.docReadme__link}>color</a> to be used as the accent color.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default PropertyDocInEnglish

import { BsTextLeft, BsRecord } from 'react-icons/bs'
import styles from './style.module.css'
function PropertyDocInPortuguese({ description = "descrição", support = "Suporta", values = "valores" }) {
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
                    A propriedade <a href={links.css} target='_blank' className={styles.docReadme__link}>CSS</a> chamada accent-color (cor de destaque) define a cor de destaque <a href={links.accent} target='_blank' className={styles.docReadme__link}>(accent)</a> para os controles da interface do usuário gerados por alguns elementos.
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
                        Os navegadores que suportam <span className={styles.docReadme__mark}>cores de destaque</span> atualmente as aplicam aos seguintes elementos HTML:
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
                            <p className={styles.uiPropDoc__text}>Representa uma cor escolhida pelo UA, que deve corresponder à cor de destaque da plataforma, se houver.</p>
                        </li>
                        <li className={styles['uiPropDoc__item--values']}>
                            <span className={styles.uiPropDoc__itemBadge}>color</span>
                            <p className={styles.uiPropDoc__text}>Especifica a <a href={links.color} target='_blank' className={styles.docReadme__link}>cor</a> a ser usada como cor de destaque.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default PropertyDocInPortuguese
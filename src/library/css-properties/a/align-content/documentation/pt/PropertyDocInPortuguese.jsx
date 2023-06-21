
import { BsTextLeft } from 'react-icons/bs'
import { links } from '../data/bookmarks'
import { valuesInPortuguese } from '../data/values'
import styles from './style.module.css'
import CreateItemForValuesList from '../components/item/CreateItemForValuesList'
function PropertyDocInPortuguese({ description = "descrição", notes = "notes", values = "valores" }) {
    
    const valuesList = valuesInPortuguese.map((valuesItem) => {
        return (
            <CreateItemForValuesList 
                key={valuesItem.option}
                title={valuesItem.option}
                description={valuesItem.description}
            />
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
                        A propriedade <a href={links.css} target='_blank' className={styles.docReadme__link}>CSS</a> align-content define a distribuição do espaço entre e ao redor dos items do conteúdo ao longo do eixo transversal de uma <a href={links.flexBox} target='_blank' className={styles.docReadme__link}>flexbox</a> ou do eixo de bloco de uma <a href={links.grid} target='_blank' className={styles.docReadme__link}>grid</a>.
                    </p>
                    <p className={styles.uiPropDoc__text}>
                        A propriedade <span className={styles.docReadme__mark}>align-content</span> especifica como as linhas flexíveis são distribuídas ao longo do eixo transversal em um container flexbox.
                    </p>
                    <p className={styles.uiPropDoc__text}>
                        No layout flexbox, o eixo principal está no <a href={links.flexDirection} target='_blank' className={styles.docReadme__link}>flex-direction</a> (padrão é 'row', horizontal), e o eixo transversal é perpendicular ao eixo principal (padrão é 'column', vertical).
                    </p>
                </div>
            </div>
            <div className={styles.uiPropDoc__section}>
                <BsTextLeft className={styles.uiPropDoc__icon} />
                <div className={styles.uiPropDoc__information}>
                    <h4 className={`${styles.uiPropDoc__title} capitalize`}>
                        {notes}
                    </h4>
                    <p className={styles.uiPropDoc__text}>
                        Esta propriedade não tem efeito em flex containers de linha única (ou seja, aqueles com <span className={styles.docReadme__mark}>flex-wrap: nowrap</span>)
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
export default PropertyDocInPortuguese
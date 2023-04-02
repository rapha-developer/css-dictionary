
import { HiOutlineSquaresPlus, HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'
import { AiFillTag } from 'react-icons/ai'
import { useState } from 'react'
import { createSecondAccordionData } from '../../../data/sidebar'
import UiAccordionItem from './item/UiAccordionItem'
import styles from './style.module.css'

function UiAccordion(props) {

    const accordion__items = props.items.map((item) => {
        return (
            <UiAccordionItem 
                key={`accordion-item-${item.name}`}
                url={item.url}
                format={props.format}
                name={item.name}
                icon={item.icon}
            />
        )
    });
    const [isAccordionOpen, setIsAccordionOpen] = useState(true)
    function changeIsAccordionOpen() {
        setIsAccordionOpen(prevState => !prevState)
    }
    function changeArrowIcon() {
        return (isAccordionOpen) ? <HiOutlineChevronUp className={`${styles.accordionLabel__icon} ${styles.accordionLabel__iconRight}`} /> :
        <HiOutlineChevronDown className={`${styles.accordionLabel__icon} ${styles.accordionLabel__iconRight}`} />
    }
    function changeAccordionHeadIcon() {
        return (props.type === createSecondAccordionData.type) ? <AiFillTag className={styles.accordionLabel__icon} /> :
        <HiOutlineSquaresPlus className={styles.accordionLabel__icon} /> 
    }
    const accordionHeadIcon = changeAccordionHeadIcon()
    const accordionArrowIcon = changeArrowIcon()
    return (
        <div className={styles.accordion}>
        <button className={`${styles.accordionButton} capitalize`}
            aria-selected={isAccordionOpen}
            aria-controls={`accordion-list-${props.title}`}
            onClick={changeIsAccordionOpen}>
            {accordionHeadIcon} {props.title} {accordionArrowIcon}
        </button>
        <div className={styles.accordion__content}
            data-visible={isAccordionOpen} 
            id={`accordion-list-${props.title}`}>
            <ul className={styles.accordionMenu__list}>
                {accordion__items}
            </ul>
        </div>
    </div>
    )
}
export default UiAccordion
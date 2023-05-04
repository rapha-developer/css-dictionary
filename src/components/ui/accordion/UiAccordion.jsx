
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
    const ariaControls = props.title.replaceAll(" ", "-")
    const ariaState = (isAccordionOpen) ? "open" : "closed"
    return (
        <div className={styles.accordion}>
            <button type="button" 
                aria-controls={`accordion-list-${ariaControls}`} 
                aria-expanded={isAccordionOpen} 
                data-state={ariaState} 
                data-orientation="vertical" 
                id={`accordion-list-${ariaControls}-label`} 
                className={`${styles.accordionButton} capitalize`}
                onClick={changeIsAccordionOpen} 
                data-radix-collection-item="">
                {accordionHeadIcon} {props.title} {accordionArrowIcon}
            </button>
            <div data-state={ariaState} 
                data-visible={isAccordionOpen}
                id={`accordion-list-${ariaControls}`} 
                role="region" 
                aria-labelledby={`accordion-list-${ariaControls}-label`} 
                data-orientation="vertical" 
                className={styles.accordion__content}>
                <ul className={styles.accordionMenu__list}>
                    {accordion__items}
                </ul>
            </div>
    </div>
    )
}
export default UiAccordion
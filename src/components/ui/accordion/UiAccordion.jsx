import { useState } from 'react'
import { AiFillTag } from 'react-icons/ai'
import { HiOutlineSquaresPlus, HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'

import styles from './style.module.css'
import UiAccordionItem from './item/UiAccordionItem'
function UiAccordion(props) {
    const uiAccordionTitle =  props?.title || "categories"
    
    const [isActive, setIsActive] = useState(false)
    function changeVisibility() {
        setIsActive((prevState) => !prevState)
    }
    const accordionData = props.items
    const accordion__items = accordionData.map((item) => {
        return (
            <UiAccordionItem 
                key={item.name}
                url={item.url}
                iconColor={item.iconColor}
                name={item.name}
                format={(props?.format) ? props.format : 'capitalize'}
            />
        )
    });
    function defineAccordionHeadIcon() {
        return (props.iconMain === "tags") ? <AiFillTag className={styles.accordion__LabelIcon} /> : <HiOutlineSquaresPlus className={styles.accordion__LabelIcon} />
    }
    function defineArrowIcon() {
        return (isActive) ? <HiOutlineChevronUp className={`${styles.accordion__LabelIcon} ${styles.accordion__iconRight}`} /> : <HiOutlineChevronDown className={`${styles.accordion__LabelIcon} ${styles.accordion__iconRight}`}/>
    }
    const uiAccordionIcon = defineAccordionHeadIcon()
    const uiAccordionArrow = defineArrowIcon()
    return (
    <div className={styles.accordion}>
        <button className={`${styles.accordionButton} capitalize`}
        aria-selected={isActive}
        aria-controls='accordion-list'
        onClick={changeVisibility}>
            {uiAccordionIcon} {uiAccordionTitle} {uiAccordionArrow}
        </button>
        <div className={styles.accordionContent}
            data-visible={isActive} id="accordion-list">
            <ul className={styles.accordionMenuList}>
                {accordion__items}
            </ul>
        </div>
    </div>
    )
}

export default UiAccordion
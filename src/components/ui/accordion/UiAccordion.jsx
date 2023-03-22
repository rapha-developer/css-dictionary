import { useState } from 'react'
import { VscCircle } from 'react-icons/vsc'
import { HiOutlineSquaresPlus, HiOutlineChevronDown } from 'react-icons/hi2'

import styles from './style.module.css'
import UiAccordionItem from './item/UiAccordionItem'
function UiAccordion(props) {
    const uiAccordionTitle =  props?.head || "categories"
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
            />
        )
    });
    return (
    <div className="accordion">
        <button className={`${styles.accordionButton} capitalize`}
        aria-selected={isActive}
        aria-controls='accordion-list'
        onClick={changeVisibility}>
            <HiOutlineSquaresPlus className={styles.accordion__LabelIcon} /> {uiAccordionTitle} <HiOutlineChevronDown className={`${styles.accordion__LabelIcon} ${styles.accordion__iconRight}`} />
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
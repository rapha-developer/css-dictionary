import { useState } from "react"
import { DocumentIcon } from "../../assets/icons/DocumentIcon"
import { WidgetAccordionList } from "../../types/widgetAccordionGroup"


export const WidgetAccordion = ({ heading, numberLessons, items }: WidgetAccordionList) => {
    const [isActive, setIsActive] = useState(true) 
    const changeIsActive = () => {
        setIsActive((prevState) => !prevState)
    }
    return (
        <div className="pt-4">
            <h3 className="w-full bg-grey-100 font-outfit text-xl font-medium text-secondary py-4 px-6 leading-tight flex items-center justify-between cursor-pointer rounded-md accordion-btn"
            onClick={changeIsActive} aria-selected={isActive}>
                <span className="accordion-title capitalize">{heading}</span>
                <span className="accordion-lesson capitalize">{numberLessons}</span>
            </h3>
            <ul className="flex flex-col gap-0 border border-solid border-borderLine accordion-list" 
                aria-expanded={isActive}>
                {Array.isArray(items) &&
                items.length > 0 &&
                items.map((accordionItem) => (
                    <li className="font-outfit text-base border-b border-solid border-borderLine px-6 py-4 rounded" key={accordionItem.label}>
                        <a href="#" className="text-body-100 group">
                            <div className="w-full flex justify-between">
                                <div className="flex gap-2 item-center">
                                    <DocumentIcon />
                                    <p className="font-outfit text-base font-normal leading-[1.5] text-body-100 group-hover:text-primary capitalize">{accordionItem.label}</p>
                                </div>
                                <p className="font-outfit text-base font-normal leading-[1.5] text-body-100 group-hover:text-primary capitalize">{accordionItem.description}</p>
                            </div>
                        </a>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
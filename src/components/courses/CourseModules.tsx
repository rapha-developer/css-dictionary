import { CourseModuleProps } from "../../types/CourseProps"
import { NavLink } from "react-router-dom"
import { DocumentIcon } from "../../assets/icons/DocumentIcon"

type CourseModulesProps = {
    courseID?: string 
    heading: string
    modules: CourseModuleProps[]
}
export const CourseModules = ({ courseID, heading, modules }: CourseModulesProps) => {
    const numberLessons = `0/${modules.length}`

    return (
        <div className="pt-4">
            <h3 className="w-full bg-primary font-outfit text-xl font-medium text-white py-4 px-6 leading-tight flex items-center justify-between cursor-pointer rounded-md accordion-btn">
                <span className="accordion-title capitalize">{heading}</span>
                <span className="accordion-lesson capitalize">{numberLessons}</span>
            </h3>
            <ul className="flex flex-col gap-0 border border-solid border-borderLine accordion-list">
                {Array.isArray(modules) &&
                modules.length > 0 &&
                modules.map((moduloItem) => (
                    <li className="font-outfit text-base border-b border-solid border-borderLine px-6 py-4 rounded" key={moduloItem.id}>
                        <NavLink to={`/courses/${courseID}/modules/${moduloItem.id}`} 
                            state={{"property": moduloItem.property}}
                            className="text-body-100 group">
                            <div className="w-full flex justify-between">
                                <div className="flex gap-2 item-center">
                                    <DocumentIcon classNames="w-5 h-5 text-primary" />
                                    <p className="font-outfit text-base font-normal leading-[1.5] text-body-100 group-hover:text-primary capitalize">{moduloItem.name}</p>
                                </div>
                                <p className="font-outfit text-base font-normal leading-[1.5] text-body-100 group-hover:text-primary capitalize">{moduloItem.property.name}</p>
                            </div>
                        </NavLink>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
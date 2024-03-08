import { courseHero } from "../../types/courseHero"
import { WidgetFilterContainer } from "../widgets"


export const CoursesLessonsHero = ({ title, subtitle }: courseHero) => {
    return (
        <div className="courses-head">
            <p className="font-outfit text-sm font-medium text-body-100 tracking-[.6px] uppercase text-center mb-2">{subtitle}</p>
            <h2 className="font-outfit text-4xl font-semibold text-secondary capitalize text-center mb-0.5">{title}</h2>
            <img src="/active-bar.svg" 
                alt="Yellow line" 
                className="w-[167px] h-auto mx-auto mb-5" />

            <WidgetFilterContainer />
        </div>
    )
}
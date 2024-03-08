import { courseHero } from "../../types/courseHero"


export const CoursesHero = ({ title, subtitle, description }: courseHero) => {
    return (
        <div className="courses-head">
            <p className="font-outfit text-sm font-medium text-body-100 tracking-[.6px] uppercase text-center mb-2">{subtitle}</p>
            <h2 className="font-outfit text-4xl font-semibold text-secondary capitalize text-center mb-0.5">{title}</h2>
            <img src="/active-bar.svg" 
                alt="Yellow line" 
                className="w-[167px] h-auto mx-auto mb-5" />
            <p className="font-outfit text-base font-normal text-body-100 leading-7 capitalize text-center">
                {description?.first_line}<br />
                {description?.second_line}
            </p>
        </div>
    )
}
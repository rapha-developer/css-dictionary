
import { HomeCoursesHeadData } from "../../data/HomeCoursesData"
import { CoursesGroupCard } from "./CoursesGroupCard"

export const Courses = () => {
    const coursesHeadData = HomeCoursesHeadData
    return (
        <section className="section-courses text-body-200 py-32">
            <div className="container mx-auto flex flex-col justify-center">
                <div className="courses-head">
                    <p className="font-outfit text-sm font-medium text-body-100 tracking-[.6px] uppercase text-center mb-2">{coursesHeadData.subtitle}</p>
                    <h2 className="font-outfit text-4xl font-semibold text-secondary capitalize text-center mb-0.5">{coursesHeadData.title}</h2>
                    <img src="/active-bar.svg" 
                        alt="Yellow line" 
                        className="w-[167px] h-auto mx-auto mb-5" />
                    <p className="font-outfit text-base font-normal text-body-100 leading-7 capitalize text-center">
                        {coursesHeadData.description.first_line}<br />
                        {coursesHeadData.description.second_line}
                    </p>
                </div>
                <CoursesGroupCard />
            </div>
        </section>
    )
}
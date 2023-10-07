import { CoursesFilter } from "./CoursesFilter"
import { CoursesHero } from "./CoursesHero"
import { CoursesMiseEnScene } from "./CoursesMiseEnScene"


export const Courses = () => {

    return (
        <>
            <CoursesMiseEnScene />
            <div className="ml-28 md:ml-32">
                <CoursesHero 
                    titlePage="property courses"
                />
            </div>
            <CoursesFilter />
        </>
    )
}

import { useLocation } from "react-router-dom"
import { HomeCoursesHeadData } from "../../data/HomeCoursesData"
import { CoursesGroupCard } from "./CoursesGroupCard"
import { CoursesHero } from "./CoursesHero"
import { CoursesLessonsHero } from "./CoursesLessonsHero"
import { CoursesLessonsGroupCard } from "./CoursesLessonsGroupCard"

export const Courses = () => {
    const coursesHeadData = HomeCoursesHeadData
    const actualLocation = useLocation()
    const isHomePage = (actualLocation.pathname === '/') ? true : false
    return (
        <section className="section-courses text-body-200 py-32">
            <div className="container mx-auto flex flex-col justify-center">
                {isHomePage && 
                    <CoursesHero 
                        title={coursesHeadData.title}
                        subtitle={coursesHeadData.subtitle}
                        description={coursesHeadData.description}
                    />
                }
                {isHomePage && <CoursesGroupCard />}
                {!isHomePage && 
                <CoursesLessonsHero 
                    title={coursesHeadData.title}
                    subtitle={coursesHeadData.subtitle}
                />}
                {!isHomePage && <CoursesLessonsGroupCard />}
            </div>
        </section>
    )
}
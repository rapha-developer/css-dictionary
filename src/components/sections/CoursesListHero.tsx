import { useAtom } from "jotai";
import { HeadingHero } from "../utils/HeadingHero"
import { controllerAtom } from "../../atoms";
import { repositoryHeadingHeroUtils } from "../../core/utils/HeadingHeroUtil";
import { CourseViewModel } from "../../view-models/CourseViewModel";
import { CourseListCard } from "../courses/CourseListCard";


export const CoursesListHero = () => {
    const headingHeroData = repositoryHeadingHeroUtils["coursesListHero"]
    const [controllerData] = useAtom(controllerAtom)
    const homeCourses = controllerData.listCourses().map((course) => CourseViewModel.viewCourse(course))
    
    return (
        <section className="courses-list-hero text-body-200 py-32">
            <div className="container mx-auto flex flex-col justify-center">
                <HeadingHero 
                    title={headingHeroData.title}
                    subtitle={headingHeroData.subtitle}
                    description={headingHeroData.description}
                />
                <div className="container mx-auto pt-10">
                    <div className="w-full flex flex-wrap gap-4 md:gap-6 items-center justify-center">
                        {Array.isArray(homeCourses) &&
                        homeCourses.length > 0 &&
                        homeCourses.map((course, key) => (
                            <CourseListCard 
                                key={course.id}
                                course={course}
                                imageID={key+1}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
import { useAtom } from "jotai";
import { HeadingHero } from "../utils/HeadingHero"
import { CourseCard } from "../courses/CourseCard"
import { controllerAtom } from "../../atoms";
import { repositoryHeadingHeroUtils } from "../../core/utils/HeadingHeroUtil";
import { CourseViewModel } from "../../view-models/CourseViewModel";


export const HomeCourses = () => {
    const headingHeroData = repositoryHeadingHeroUtils["homeCourses"]
    const [controllerData] = useAtom(controllerAtom)
    const homeCourses = controllerData.listCourses().map((course) => CourseViewModel.viewCourse(course))
    
    return (
        <section className="home-courses text-body-200 py-32">
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
                            <CourseCard 
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
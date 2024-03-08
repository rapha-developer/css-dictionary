import { HomeCoursesData } from "../../data/HomeCoursesData"
import { CoursesLessonsCard } from "./CoursesLessonsCard"


export const CoursesLessonsGroupCard = () => {
    const coursesCollection = HomeCoursesData

    return (
        <div className="container mx-auto pt-10">
            <div className="w-full flex flex-wrap gap-4 md:gap-6 items-center justify-center">
                {Array.isArray(coursesCollection) &&
                coursesCollection.length > 0 &&
                coursesCollection.map((coursesItem) => (
                    <CoursesLessonsCard 
                        key={coursesItem.title}
                        image={coursesItem.image}
                        category={coursesItem.category}
                        title={coursesItem.title}
                        url={coursesItem.url}
                        author={coursesItem.author}
                        price={coursesItem.price}
                        numberLessons={"2"}
                    />
                ))
                }
            </div>
        </div>
    )
}
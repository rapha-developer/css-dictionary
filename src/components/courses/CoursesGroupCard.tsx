import { HomeCoursesData } from "../../data/HomeCoursesData"
import { CoursesCard } from "./CoursesCard"


export const CoursesGroupCard = () => {
    const coursesCollection = HomeCoursesData

    return (
        <div className="container mx-auto pt-10">
            <div className="w-full flex flex-wrap gap-4 md:gap-6 items-center justify-center">
                {Array.isArray(coursesCollection) &&
                coursesCollection.length > 0 &&
                coursesCollection.map((coursesItem) => (
                    <CoursesCard 
                        key={coursesItem.title}
                        image={coursesItem.image}
                        category={coursesItem.category}
                        title={coursesItem.title}
                        url={coursesItem.url}
                        author={coursesItem.author}
                        price={coursesItem.price}
                    />
                ))
                }
            </div>
        </div>
    )
}
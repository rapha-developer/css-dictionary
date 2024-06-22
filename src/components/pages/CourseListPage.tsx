import { Header } from "../header"
import { CoursesListHero } from "../sections/CoursesListHero"

export const CourseListPage = () => {
    return (
        <div className="">
            <Header />
            <img src="/hero-main.png" 
                className="w-full max-h-[540px] object-cover"
            />
            <CoursesListHero />
        </div>
    )
}
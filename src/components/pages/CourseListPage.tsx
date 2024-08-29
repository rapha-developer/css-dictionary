import { useEffect } from "react"
import { Footer } from "../footer/Footer"
import { Header } from "../header"
import { CoursesListHero } from "../sections/CoursesListHero"

export const CourseListPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="">
            <Header />
            <img src="/hero-main.png" 
                className="w-full max-h-[540px] object-cover"
            />
            <CoursesListHero />
            <Footer />
        </div>
    )
}
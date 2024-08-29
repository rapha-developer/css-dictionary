import { useLocation, useNavigate } from "react-router-dom"
import { CourseProps } from "../../types/CourseProps"
import { useEffect, useState } from "react"
import { CoursesInfo } from "../sections/CoursesInfo"
import { Header } from "../header"
import { Hero404 } from "../utils/Hero404"
import { Footer } from "../footer/Footer"

export const CoursePage = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [courseState] = useState<CourseProps>(state?.course)
    const courseExist = (courseState?.name) ? true : false
    
    useEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            if(!courseState) {
                return navigate("/")
            }
        }, 5000);
    }, [courseState, navigate])

    return (
        <div className=""> 
            <Header />
            <img src="/hero-main.png" 
                className="w-full max-h-[540px] object-cover"
            />
            {courseExist &&
            <CoursesInfo 
                id={courseState?.id}
                name={courseState.name}
                category={courseState.category}
                price={courseState.price}
                author={courseState.author}
                modules={courseState.modules}
                info={courseState.info}
            />
            }
            {!courseExist &&
            <Hero404 />
            }
            <Footer />
        </div>
    )
}
import { BreadCrumbCoursesRoute } from "../../data/WidgetBreadCrumbRoutesData"
import { Courses } from "../courses"
import { Footer } from "../footer"
import { Header } from "../header"
import { Heading } from "../heading"

export const CoursesPage = () => {
    return (
        <>
            <Header />
            <Heading 
                actual={BreadCrumbCoursesRoute.actual}
                historic={BreadCrumbCoursesRoute.historic}
            />
            <Courses />
            <Footer />
        </>
    )
}
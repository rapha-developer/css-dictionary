import { BreadCrumbLessonsRoute } from "../../data/WidgetBreadCrumbRoutesData"
import { Footer } from "../footer"
import { Header } from "../header"
import { Heading } from "../heading"
import { Lessons } from "../lessons"


export const LessonsPage = () => {
    return (
        <>
            <Header />
            <Heading 
                historic={BreadCrumbLessonsRoute.historic}
                actual={BreadCrumbLessonsRoute.actual}
            />
            <Lessons />
            <Footer />
        </>
    )
}
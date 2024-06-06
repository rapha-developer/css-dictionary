import { BreadCrumbLecturesRoute } from "../../data/WidgetBreadCrumbRoutesData"
import { Header } from "../header"
import { Heading } from "../heading"
import { Lectures } from "../lectures"


export const LecturePage = () => {
    return (
        <>
            <Header />
            <Heading 
                historic={BreadCrumbLecturesRoute.historic}
                actual={BreadCrumbLecturesRoute.actual}
            />
            <Lectures />
        </>
    )
}
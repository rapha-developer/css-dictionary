import { WidgetCallToActionData } from "../../data"
import { Courses } from "../courses"
import { Explore } from "../explore"
import { ExploreTeacher } from "../explore/ExploreTeacher"
import { Footer } from "../footer"
import { Header } from "../header"
import { Hero } from "../hero"
import { WidgetCallToAction } from "../widgets"

export const HomePage = () => {
    const widgetCallProps = WidgetCallToActionData
    return (
        <>
            <Header />
            <Hero />
            <Courses />
            <Explore />
            <WidgetCallToAction 
                title={widgetCallProps.title}
                button={widgetCallProps.button}
            />
            <ExploreTeacher />
            <Footer />
        </>
    )
}
import { useEffect } from "react"
import { Footer } from "../footer/Footer"
import { Header } from "../header"
import { HomeCourses } from "../sections/HomeCourses"
import { HomeExplore } from "../sections/HomeExplore"
import { HomeHero } from "../sections/HomeHero"
import { HomeInstructor } from "../sections/HomeInstructor"
import { WidgetCallToAction } from "../utils/WidgetCallToAction"

export const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="homepage">
            <Header />
            <HomeHero 
                subtitle="Cursos 100% de qualidade"
                title="Encontre o curso perfeito e melhore suas skills"
            />
            <HomeCourses />
            <HomeExplore />
            <WidgetCallToAction />
            <HomeInstructor />
            <Footer />
        </div>
    )
}
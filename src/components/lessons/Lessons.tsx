import { LessonsHeroData } from "../../data/LessonsHeroData"
import { LessonsCourseHero } from "./LessonsCourseHero"
import { LessonsCourseHeroOverview } from "./LessonsCourseHeroOverview"
import { LessonsCourseHeroCurriculum } from "./LessonsCourseHeroCurriculum"
import { LessonsFullCard } from "./LessonsFullCard"
import { LessonsCourseHeroData } from "../../data/LessonsCourseHeroData"
import { WidgetAccordionListData } from "../../data/WidgetAccordionListData"
import { WidgetAccordion } from "../widgets"

export const Lessons = () => {
    const lessonData = LessonsHeroData
    const lessonsCardData = LessonsCourseHeroData

    return (
        <div className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% pt-20 pb-32 h-fit">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-[8fr_4fr] gap-10 px-2 sm:p-4 lg:px-8">
                    <div className="lessons-main">
                        <LessonsCourseHero 
                            title={lessonData.title}
                            description={lessonData.description}
                            category={lessonData.category}
                            author={lessonData.author}
                            lastUpdate={lessonData.lastUpdate}
                        />
                        
                        <LessonsCourseHeroOverview 
                            heading="course description" 
                            firstText="maximus ligula eleifend id nisl quis interdum. sed malesuada tortor non turpis semper bibendum. ut ac nisi porta, malesuada risus non viverra dolor. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae in tristique libero, quis ultrices diam praesent varius diam dui. class aptent taciti sociosqu ad litora torquent per conubia nostra."
                            secondText="maximus ligula eleifend id nisl quis interdum. sed malesuada tortor non turpis semper bibendum. ut ac nisi porta, malesuada risus non viverra dolor. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae in tristique libero, quis ultrices diam praesent varius diam dui. class aptent taciti sociosqu ad litora torquent per conubia nostra."
                        />
                        <LessonsCourseHeroCurriculum 
                            heading="course curriculum" 
                            description="maximus ligula eleifend id nisl quis interdum. sed malesuada tortor non turpis semper bibendum. ut ac nisi porta, malesuada risus non viverra dolor. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere."
                        />
                        <WidgetAccordion 
                            heading="introduction"
                            numberLessons="0/5"
                            items={WidgetAccordionListData}
                        />
                    </div>
                    <LessonsFullCard 
                        heading={lessonsCardData.heading}
                        items={lessonsCardData.items}
                    />
                </div>
            </div>
        </div>
    )
}


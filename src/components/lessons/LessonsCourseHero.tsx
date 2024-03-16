import { LessonsHero } from "../../types/lessonsHero"
import { LessonsCourseHeroAuthor } from "./LessonsCourseHeroAuthor"
import { LessonsCourseHeroUpdate } from "./LessonsCourseHeroUpdate"


export const LessonsCourseHero = ({ category, title, description, author, lastUpdate }: LessonsHero) => {
    return (
        <div className="flex flex-col gap-3">
            <span className="inline-block bg-icon-widget-purple hover:opacity-90 text-white w-fit font-outfit font-normal text-sm capitalize rounded-[5px] py-1 px-3">
                {category}
            </span>
            <h1 className="font-outfit text-3xl sm:text-4xl font-semibold text-secondary capitalize">{title}</h1>
            <p className="font-outfit text-base font-normal leading-7 text-body-100 capitalize">{description}</p>
            <div className="flex flex-col md:flex-row gap-5 md:gap-3 md:items-center pt-3">
                <LessonsCourseHeroAuthor 
                    gravatar={author.gravatar}
                    name={author.name}
                />
                <LessonsCourseHeroUpdate 
                    lastUpdate={lastUpdate}
                />
            </div>
            <div className="border-b border-solid border-borderLine w-full pt-5 mb-8"></div>
        </div>
    )
}

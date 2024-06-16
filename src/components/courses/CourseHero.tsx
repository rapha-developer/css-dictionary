import { CalendarIcon } from "../../assets/icons/CalendarIcon"
import { CourseProps } from "../../types/CourseProps"

type CourseHeroProps = {
    courseName?: string
    resume: string
    category: string
    author: CourseProps['author']
    lastUpdate: string
}
export const CourseHero = ({ category, courseName, resume, author, lastUpdate }: CourseHeroProps) => {
    return (
        <div className="flex flex-col gap-3">
            <span className="inline-block bg-icon-widget-purple hover:opacity-90 text-white w-fit font-outfit font-normal text-sm capitalize rounded-[5px] py-1 px-3">
                {category}
            </span>
            <h1 className="font-outfit text-3xl sm:text-4xl font-semibold text-secondary capitalize">{courseName}</h1>
            <p className="font-outfit text-base font-normal leading-7 text-body-100 capitalize">{resume}</p>
            <div className="flex flex-col md:flex-row gap-5 md:gap-3 md:items-center pt-3">
                <CourseHeroAuthor 
                    gravatar={author.gravatar}
                    name={author.name}
                />
                <CourseHeroUpdate 
                    lastUpdate={lastUpdate}
                />
            </div>
            <div className="border-b border-solid border-borderLine w-full pt-5 mb-8"></div>
        </div>
    )
}

export const CourseHeroAuthor = ({ gravatar, name }: CourseHeroProps['author']) => {
    return (
        <div className="courseHero-author flex gap-[10px] items-center cursor-pointer">
            <img src={gravatar} 
                alt="Photo of author" 
                className="rounded-full w-8 h-8" />
            <span className="inline-block font-outfit font-medium text-base text-body-100 leading-7 hover:text-primary capitalize">{name}</span>
        </div>
    )
}

type courseUpdateProps = {
    lastUpdate: string
}
export const CourseHeroUpdate = ({ lastUpdate }: courseUpdateProps) => {
    const messageUpdate = `Última atualização há ${lastUpdate}`
    return (
        <div className="lessonHero-update flex gap-[5px] items-center">
            <CalendarIcon classNames="w-5 h-5 text-body-100" />
            <span className="inline-block font-outfit font-normal text-base text-body-100 leading-7 cursor-none">{messageUpdate}</span>
        </div>
    )
}
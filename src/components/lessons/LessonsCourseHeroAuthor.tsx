import { LessonsHero } from "../../types/lessonsHero"


export const LessonsCourseHeroAuthor = ({ gravatar, name }: LessonsHero['author']) => {
    return (
        <div className="lessonHero-author flex gap-[10px] items-center cursor-pointer">
            <img src={gravatar} 
                alt="Photo of author" 
                className="rounded-full w-8 h-8" />
            <span className="inline-block font-outfit font-medium text-base text-body-100 leading-7 hover:text-primary capitalize">{name}</span>
        </div>
    )
}
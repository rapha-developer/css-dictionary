import { isString, toNumber } from "lodash"
import { BookOpenSmartIcon } from "../../assets/icons"
import { CourseCard } from "../../types/courseCard"


export const CoursesLessonsCard = ({image, category, title, url, author, price, numberLessons }: CourseCard) => {
    const lessons = (isString(numberLessons) && toNumber(numberLessons) > 1) ? " lessons" : " lesson"
    return (
        <div className="bg-white p-6 border-2 border-solid border-borderLine rounded-[10px] w-full max-w-80">
            <div className="courseCard-head rounded-[10px] overflow-hidden mb-4 relative">
                <a href={url} className="">
                    <img src={image} 
                        alt="People talking (pessoas conversando)" 
                        className="w-full h-auto hover:scale-[1.07] transition-all-card-image cursor-pointer"
                    />
                </a>
                <span className="inline-block absolute top-4 left-4 border-2 border-solid border-borderLine font-outfit text-body-100 text-sm rounded-md leading-normal py-1 px-3 capitalize cursor-pointer mb-3 bg-white hover:bg-primary hover:text-white">
                    {category}
                </span>
            </div>
            <div className="flex items-center text-body-100 text-sm font-medium leading-normal py-1 px-0 capitalize cursor-none mb-3 w-full">
                <BookOpenSmartIcon /> {numberLessons + lessons}
            </div>
            <h3 className="font-outfit text-xl font-semibold text-secondary leading-normal capitalize mb-6 cursor-pointer hover:text-primary">{title}</h3>
            <div className="cardCourse-footer flex justify-between">
                <div className="courseCard-author flex gap-[10px] items-center cursor-pointer">
                    <img src={author.gravatar} 
                        alt="Photo of author" 
                        className="rounded-full w-8 h-8" />
                    <span className="inline-block font-outfit font-normal text-sm text-secondary hover:text-primary capitalize">{author.name}</span>
                </div>
                <span className="inline-block font-outfit text-xl font-semibold text-primary capitalize">{price}</span>
            </div>
        </div>
    )
}
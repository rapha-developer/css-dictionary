import { LessonsCourseCard } from "../../types/lessonAreaCard"
import { LessonsAreaCard } from "./LessonsAreaCard"


export const LessonsFullCard = ({ heading, items }: LessonsCourseCard) => {
    const headingDefault = (heading) ? heading : "this course includes:"
    return (
        <div className="lessons-secondary border border-solid border-borderLine rounded-md p-4 pb-[30px] md:p-[30px] widget-area-box-shadow h-fit max-w-lg mx-auto">
            <div className="lesson-secondary-head mb-8">
                <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_2-380x277.jpg" 
                    alt="People talking around table" 
                    className="w-full h-auto aspect-auto rounded-[10px]" />
            </div>
            <LessonsAreaCard 
                heading={headingDefault}
                items={items}
            />
        </div>
    )
}
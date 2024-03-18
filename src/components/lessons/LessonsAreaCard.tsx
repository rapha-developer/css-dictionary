import { DocumentIcon } from "../../assets/icons/DocumentIcon"
import { LessonsCourseCard } from "../../types/lessonAreaCard"


export const LessonsAreaCard = ({ heading, items }: LessonsCourseCard) => {
    return (
        <div className="lesson-secondary-body">
            <h3 className="font-outfit text-xl font-semibold leading-9 text-secondary capitalize mb-2">{heading}</h3>
            <ul className="flex flex-col gap-0">
                {Array.isArray(items) &&
                items.length > 0 &&
                items.map((lessonsAreaCardItem) => (
                    <li className="border-b border-solid border-borderLine pt-4 pb-2 flex justify-between items-center" key={lessonsAreaCardItem.label}>
                        <p className="lesson-secondary-label font-outfit text-sm font-normal leading-7 text-body-100 capitalize flex items-center gap-1">
                            <DocumentIcon /> <span className="pt-1">{lessonsAreaCardItem.label}</span>
                        </p>
                        <p className="lessons-secondary-content font-outfit text-sm font-normal leading-7 text-body-100 capitalize">
                            {lessonsAreaCardItem.value}
                        </p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
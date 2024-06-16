import { DocumentIcon } from "../../assets/icons/DocumentIcon"
import { CourseAreaUtil } from "../../core/utils/CourseAreaUtil"

type CourseAreaProps = {
    heading: string
    numberModules: number
}
export const CourseArea = ({ heading, numberModules }: CourseAreaProps) => {
    const items = (new CourseAreaUtil({
        numberModules: numberModules
    })).courseAreaViewModel()
    return (
        <div className="lessons-secondary border border-solid border-borderLine rounded-md p-4 pb-[30px] md:p-[30px] widget-area-box-shadow h-fit max-w-lg mx-auto">
            <div className="lesson-secondary-head mb-8">
                <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_2-380x277.jpg" 
                    alt="People talking around table" 
                    className="w-full h-auto aspect-auto rounded-[10px]" />
            </div>
            <div className="lesson-secondary-body">
                <h3 className="font-outfit text-xl font-semibold leading-9 text-secondary capitalize mb-2">{heading}</h3>
                <ul className="flex flex-col gap-0">
                    {Array.isArray(items) &&
                    items.length > 0 &&
                    items.map((info) => (
                        <li className="border-b border-solid border-borderLine pt-4 pb-2 flex justify-between items-center" key={info.label}>
                            <p className="lesson-secondary-label font-outfit text-sm font-normal leading-7 text-body-100 capitalize flex items-center gap-1">
                                <DocumentIcon classNames="w-5 h-5 text-primary" /> <span className="pt-1">{info.label}</span>
                            </p>
                            <p className="lessons-secondary-content font-outfit text-sm font-normal leading-7 text-body-100 capitalize">
                                {info.value}
                            </p>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}
import { NavLink } from "react-router-dom"
import { CourseProps } from "../../types/CourseProps"
import { BookOpenSmartIcon } from "../../assets/icons/BookOpenSmartIcon"

type courseCardProps = {
    course: CourseProps
    imageID: number
}

export const CourseListCard = ({ course, imageID }: courseCardProps) => {
    const { id, name, category, author, price, modules } = course
    
    const imageIDBelowSeven = (imageID > 7) ? makeImageIDBelowEight(imageID) : imageID
    const image = `https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_${imageIDBelowSeven}-380x277.jpg`
    
    return (
        <div className="bg-white p-6 border-2 border-solid border-borderLine rounded-[10px] w-full max-w-80">
            <div className="courseCard-head rounded-[10px] overflow-hidden mb-4 relative">
                <NavLink to={`/courses/${id}`} state={{"course": course}} >
                    <img src={image} 
                        alt="People talking (pessoas conversando)" 
                        className="w-full h-auto hover:scale-[1.07] transition-all-card-image cursor-pointer"
                    />
                </NavLink>
                <span className="absolute top-4 left-4 inline-block border-2 border-solid border-borderLine font-outfit text-body-100 text-sm rounded-md leading-normal py-1 px-3 capitalize cursor-pointer mb-3 bg-white hover:bg-primary hover:text-white">
                    {category}
                </span>
            </div>
            <span className="flex items-center text-body-100 text-sm font-medium leading-normal py-1 px-0 capitalize cursor-none mb-3 w-full">
                <BookOpenSmartIcon classNames="w-5 h-5 text-body-100 mr-2" />{`${modules.length} lessons`}
            </span>
            <NavLink to={`/courses/${id}`} state={{"course": course}} >
                <h3 className="font-outfit text-xl font-semibold text-secondary leading-normal capitalize mb-6 cursor-pointer hover:text-primary">{name}</h3>
            </NavLink>
            <div className="cardCourse-footer flex justify-between">
                <div className="courseCard-author flex gap-[10px] items-center cursor-pointer">
                    <img src={author.gravatar} 
                        alt="photo of the course author (Foto do autor do curso)" 
                        className="rounded-full w-8 h-8" />
                    <span className="inline-block font-outfit font-normal text-sm text-secondary hover:text-primary capitalize">{author.name}</span>
                </div>
                <span className="inline-block font-outfit text-xl font-semibold text-primary capitalize">{price}</span>
            </div>
        </div>
    )
}

function makeImageIDBelowEight(imageID: number): number {
    let newImageID = 0;
    while(imageID > 7) {
        imageID -= 4;
    }
    newImageID = imageID
    return newImageID
}
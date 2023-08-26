import { feedTimelineItem } from "../../types/feedTimelineItem"

export const FeedTimelineItem = ({image, title, description}: feedTimelineItem) => {
    return (
        <div className="p-3 pb-6 bg-white rounded-2xl w-full lg:w-80 transition-all duration-300 hover:-translate-y-5 cursor-pointer">
            <img src={image} 
                alt="Thumbnail" 
                className="w-full h-[220px] rounded-2xl object-cover mb-5" 
            />
            <p className="font-red-hart text-lg font-medium text-primary-200 capitalize mb-3">{title}</p>
            <p className="font-inter text-sm font-medium text-primary-100 max-w-[240px]">{description}</p>
        </div>
    )
}
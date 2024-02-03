
import { RecommendedWebsiteData } from "../../data/RecommendedWebsiteData"

export const ExploreWebSchools = () => {
    const recommendedList = RecommendedWebsiteData
    return (
        <div className="w-full flex flex-wrap items-center gap-6 gap-y-8 justify-center">
            {Array.isArray(recommendedList) &&
            recommendedList.length > 0 &&
            recommendedList.map((websiteItem) => (
                <div className="w-44 flex justify-center cursor-pointer group" key={websiteItem.alt}>
                    <img src={`/brands/brand-${websiteItem.icon}.svg`} 
                        alt={websiteItem.alt} 
                        className="add-effect-gray-in-image group-hover:remove-effect-gray-in-image" />
                </div>
            ))
            }
        </div>
    )
}
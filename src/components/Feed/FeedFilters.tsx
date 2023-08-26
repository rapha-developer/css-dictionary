
import { feedFilterItems } from '../../data/ItemsData'
import { FeedFilterItem } from './FeedFilterItem'
export const FeedFilters = () => {
    const zero = 0
    return (
        <ul className="flex flex-col py-4 sm:py-0 sm:flex-row gap-4 sm:gap-6 lg:gap-10 sm?items-center">
            {Array.isArray(feedFilterItems) &&
                feedFilterItems.length > zero && 
                feedFilterItems.map((item) => (
                    <FeedFilterItem 
                        key={`kFeedOption-${item.text}`}
                        text={item.text}
                        url={item.url}
                    />
                ))
            }
        </ul>
    )
}
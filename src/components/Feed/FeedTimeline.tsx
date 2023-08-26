
import { timelineData } from "../../data/TimelineData"
import { FeedTimelineItem } from "./FeedTimelineItem"

export const FeedTimeline = () => {
    const zero = 0
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-4 sm:gap-10">
            {Array.isArray(timelineData) &&
                timelineData.length > zero &&
                timelineData.map((post) => (
                    <FeedTimelineItem
                        key={`kTimeline-post-${post.title}`}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                    />
                ))
            }
        </div>
    )
}
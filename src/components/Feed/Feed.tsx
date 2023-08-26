
import { FeedFilters } from "./FeedFilters"
import { FeedTimeline } from "./FeedTimeline"

export const Feed = () => {
    const title = "trending nFT’s"
    return (
        <section className="px-4 lg:px-10">
            <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8">
                <h1 className="font-red-hart text-2xl font-semibold text-primary-200 capitalize">{title}</h1>
                <FeedFilters />
            </div>
            <FeedTimeline />
        </section>
    )
}

import { feedFilterItem } from "../../types/feedFilterItem"

export const FeedFilterItem = ({text, url}: feedFilterItem) => {
    return (
        <li className="">
            <a href={url} className="font-red-hart text-lg font-semibold text-backgrounds-400 hover:text-accent-200 capitalize">{text}</a>
        </li>
    )
}
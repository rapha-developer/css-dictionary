import { RocketLaunchIcon } from "../../assets/icons/RocketLaunchIcon"
import { FeedFilters } from "../Feed/FeedFilters"
import { useMemo } from "react"
import { useFetch } from "../../hooks/useFetch"
import { Property } from "../../types/property"
import { PropertyCard } from "../Card/PropertyCard"

type Props = {
    title: string
    url: string
}
export const HomeCollection = ({ title, url }: Props) => {
    const fetchUrl = useMemo(() => {
        const newURL = new URL(url)
        return newURL
    }, [url])

    const { data: properties, isLoading } = useFetch<Property[]>(fetchUrl)

    return (
        <div className="mb-10 md:mb-16"> 
            <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8">
                <h1 className="font-red-hart text-2xl font-semibold text-primary-200 capitalize">{title}</h1>
                <FeedFilters />
            </div>
            {isLoading ? (
                <RocketLaunchIcon  classNames="my-12 h-12 w-12 text-gray-500 animate-bounce" />
            ) : (
                <div className="flex py-4 propertyCard-container bg-backgrounds-500 overflow-x-scroll cursor-pointer">
                    {Array.isArray(properties) &&
                        properties.length > 0 &&
                        properties.map((propertyItem) => (
                            <PropertyCard 
                                key={`kProperty-${propertyItem.id}`}
                                id={propertyItem.id}
                                attributes={propertyItem.attributes}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

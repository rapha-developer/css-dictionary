import { useAtom } from "jotai"
import { queryAtom } from "../../atoms"
import { useMemo, } from "react"
import { useFetch } from "../../hooks/useFetch"
import { RocketLaunchIcon } from "../../assets/icons/RocketLaunchIcon"
import { Property } from "../../types/property"
import { FeedFilters } from "../Feed/FeedFilters"
import { PropertyCard } from "../Card/PropertyCard"


export const HomePage = () => {
    const [query] = useAtom(queryAtom)
    const fetchUrl = useMemo(() => {
        const url = new URL(`https://rapha-developer-laravel.000webhostapp.com/all_properties`)
        return url
    }, [])

    const { data: properties, isLoading } = useFetch<Property[]>(fetchUrl)
    const title = (query === "") ? "trending nFT’s" : "You search: " + query
    return (
        <section className="px-4 lg:px-10">
            <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8">
                <h1 className="font-red-hart text-2xl font-semibold text-primary-200 capitalize">{title}</h1>
                <FeedFilters />
            </div>
            {isLoading ? (
                <RocketLaunchIcon  classNames="my-12 h-12 w-12 text-gray-500 animate-bounce" />
            ) : (
                <div className="flex py-4 propertyCard-container bg-white overflow-x-scroll cursor-pointer">
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
        </section>
    )
}
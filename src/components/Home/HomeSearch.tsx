import { useAtom } from "jotai"
import { queryAtom } from "../../atoms"
import { ErrorCard } from "../Card/ErrorCard"
import { useMemo } from "react"
import { useFetch } from "../../hooks/useFetch"
import { Property } from "../../types/property"
import { RocketLaunchIcon } from "../../assets/icons/RocketLaunchIcon"
import { PropertyCard } from "../Card/PropertyCard"

export const HomeSearch = () => {
    const [query] = useAtom(queryAtom)
    const isQueryEmpty = (query === "") ? true : false
    const displayMode = (isQueryEmpty) ? 'hidden' : 'block'

    const fetchUrl = useMemo(() => {
        const newURL = new URL(`https://rapha-developer-laravel.000webhostapp.com/properties/autocomplete/${query}`)
        return newURL
    }, [query]);
    const {data: properties, isLoading } = useFetch<Property[]>(fetchUrl)

    return (
        <div className={`mb-6 md:mb-10 bg-backgrounds-100 px-6 md:px-8 py-6 rounded-xl animate-fadeIn ${displayMode}`}>
            <h3 className="font-red-hart text-3xl font-medium text-primary-200 mb-10">
                Results for '{query}' below: 
            </h3>
            {isLoading ? (
                <RocketLaunchIcon classNames="my-12 h-12 w-12 text-gray-500 animate-bounce" />
            ) : (
                <div className="flex py-4 propertyCard-container overflow-x-scroll cursor-pointer">
                {Array.isArray(properties) && 
                    properties.length > 0 &&
                    properties.map((propertyItem) => (
                        <PropertyCard 
                            key={`kPropertySearch-${propertyItem.id}`}
                            id={propertyItem.id}
                            attributes={propertyItem.attributes}
                        />
                    ))
                }
                {Array.isArray(properties) &&
                properties.length === 0 && 
                    <ErrorCard  />
                }
                </div>
            )}
        </div>
    )
}
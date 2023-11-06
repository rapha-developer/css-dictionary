import { useMemo } from "react"
import { CoursesFilter } from "./CoursesFilter"
import { useFetch } from "../../hooks/useFetch";
import { Property } from "../../types/propertyWithSlug";
import { RocketLaunchIcon } from "../../assets/RocketLaunchIcon";
import { Link } from "react-router-dom";
import { CoursesGridCard } from "./CoursesGridCard";


export const CoursesGrid = () => {
    const url = `https://rapha-developer-laravel.000webhostapp.com/properties/start/a`
    const fetchUrl = useMemo(() => {
        const newURL = new URL(url)
        return newURL
    }, [url]);
    const { data: properties, isLoading } = useFetch<Property[]>(fetchUrl)

    return (
        <div className="w-full min-h-screen pt-28 bg-[#140c2d]">
            <CoursesFilter />
            <div className="ml-28 md:ml-32 mr-4 md:mr-8 flex flex-grow">
                <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center w-full">
                    {isLoading ? (
                        <RocketLaunchIcon classNames="my-12 h-12 w-12 text-white animate-bounce" />
                    ) : (
                        <>
                        {Array.isArray(properties) &&
                            properties.length > 0 &&
                            properties.map((propertyItem) => (
                                <Link to={`/property/${propertyItem.slug.name}`} key={propertyItem.id} >
                                    <CoursesGridCard property={propertyItem} />
                                </Link>
                            ))
                        }
                        </>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}
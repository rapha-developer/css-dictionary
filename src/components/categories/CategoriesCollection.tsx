import { useMemo } from "react"
import { CategoriesCard } from "./CategoriesCard"
import { useFetch } from "../../hooks/useFetch"
import { RocketLaunchIcon } from "../../assets/RocketLaunchIcon"
import { Alphabet } from "../../types/alphabet"


type Props = {
    url: string
}
export const CategoriesCollection = ({ url }: Props) => {
    const fetchUrl = useMemo(() => {
        const newURL = new URL(url)
        return  newURL
    }, [url])
    const {data: collections, isLoading } = useFetch<Alphabet[]>(fetchUrl)
    return (
        <div className="ml-28 md:ml-32 border-accent-300 py-2">
            {isLoading ? (
                <RocketLaunchIcon classNames="my-12 h-12 w-12 text-white animate-bounce" />
            ) : (
                <>
                {Array.isArray(collections) &&
                    collections.length > 0 &&
                    collections.map((propertyItem) => (
                        <CategoriesCard 
                            key={`k-${propertyItem.letter}`}
                            title={propertyItem.title}
                            letter={propertyItem.letter}
                        />
                    ))
                }
                </>
            )}
        </div>
    )
}
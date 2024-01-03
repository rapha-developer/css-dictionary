import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { RocketLaunchIcon } from "../../assets/RocketLaunchIcon";
import { Sample } from "../../types/sample";
import { HorizontalBarData } from "../../data/HorizontalBarData";


export const ArticleExamples = () => {
    const params = useParams()
    const url = `https://rapha-developer-laravel.000webhostapp.com/properties/${params.propertyName}/allSamples`;
    const fetchURL = useMemo(() => {
        const newURL = new URL(url)
        return newURL
    }, [url])
    const { data: properties, isLoading } = useFetch<Sample[]>(fetchURL)
    const label = HorizontalBarData[1].text
    return (
        <div className="flex flex-col gap-4 md:gap-10 md:flex-row flex-grow border-2  border-red-200 max-w-4xl">
            <h2 className="mb-80 font-mono font-bold text-white capitalize text-2xl lg:min-w-[120px]" id={label}>{label}</h2>
            <div className="titulo-content">
                {isLoading ? (
                    <RocketLaunchIcon classNames="ml-28 md:ml-32 my-12 h-12 w-12 text-white animate-bounce" />
                ): (
                <>
                {Array.isArray(properties) && 
                properties.length > 0 && 
                properties.map((propertyItem) => (
                    <div className="titulo-content" key={propertyItem.id}>
                        <p className="font-inter text-base text-slate-200 leading-7 mt-1">{propertyItem.attributes.title}</p>
                        <p className="font-inter text-base text-slate-200 leading-7 mt-4">{propertyItem.attributes.description}</p>
                    </div>
                    ))
                }
                </>
                )}
            </div>
        </div>
    )
}
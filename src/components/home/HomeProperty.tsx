import { useMemo } from 'react'
import { useParams } from "react-router-dom"
import { isString } from "lodash"
import { HomePageHero } from "../hero"
import { Header } from "../header"
import { useFetch } from "../../hooks/useFetch"
import { Property } from "../../types/propertyWithSlug"
import { RocketLaunchIcon } from '../../assets/RocketLaunchIcon'
import { PropertyMiseEnScene } from '../mise'

export const HomeProperty = () => {
    const params  = useParams()

    const url = `https://rapha-developer-laravel.000webhostapp.com/properties/slug/${params.propertyName}`
    const fetchUrl = useMemo(() => {
        const newURL= new URL(url)
        return newURL
    }, [url])
    const { data: properties, isLoading } = useFetch<Property[]>(fetchUrl)
    
    return (
        <section className="w-full min-h-screen relative">
            <PropertyMiseEnScene />
            <div className="pt-8">
                <Header />
                {isLoading ? (
                    <RocketLaunchIcon classNames="ml-28 md:ml-32 my-12 h-12 w-12 text-white animate-bounce" />
                ): (
                    <>
                    {Array.isArray(properties) &&
                        properties.length > 0 &&
                        properties.map((propertyItem) => (
                        <HomePageHero 
                            key={propertyItem.id}
                            title={propertyItem.attributes.name}
                            subtitle={propertyItem.attributes.category}
                            description={propertyItem.attributes.description}
                        />
                        ))
                    }
                    </>
                )}
            </div>
        </section>
    )
}


import { HomeCollection } from "./HomeCollection"
import { HomeSearch } from "./HomeSearch"

export const HomePage = () => {
    return (
        <section className="px-4 lg:px-10">
            <HomeSearch />
            <HomeCollection 
                key={'kFirstTrending'}
                url="https://rapha-developer-laravel.000webhostapp.com/all_properties"
                title="trending nFT’s"
            />
            <HomeCollection 
                key={'kSecondTrending'}
                url="https://rapha-developer-laravel.000webhostapp.com/all_properties"
                title="trending Css"
            />
        </section>
    )
}
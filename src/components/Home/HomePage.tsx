
import { HomeCollection } from "./HomeCollection"

export const HomePage = () => {
    return (
        <section className="px-4 lg:px-10">
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
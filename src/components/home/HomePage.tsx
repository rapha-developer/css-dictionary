
import { queryAtom } from '../../atoms';
import { useAtom } from 'jotai'
import { Header } from './../header/Header';
import { HomePageHero } from '../hero';
import { MiseEnScene } from '../mise';
import { heroDataHomePage } from '../../data/HeroData';
import { Categories } from '../categories';
import { CategoriesHeroData } from '../../data/CategoriesHeroData';
// import { PropertyData } from '../../data/PropertyData';

export const HomePage = () => {
    const homePageData = heroDataHomePage
    const [query] = useAtom(queryAtom)
    return (
        <section className="w-full min-h-screen relative pt-4 md:pt-8">
            <MiseEnScene />
            <Header />
            <HomePageHero 
                title={homePageData.title}
                subtitle={homePageData.subtitle}
                description={homePageData.description}
            />
            <h3 className="ml-28 md:ml-32 font-inter text-white text-3xl mb-10">{query}</h3>
            <Categories 
                hero={CategoriesHeroData}
            />
        </section>
    )
}
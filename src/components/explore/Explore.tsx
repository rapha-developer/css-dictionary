import { ExploreHeroData } from "../../data/ExploreHeroData"
import { ExploreHero } from "./ExploreHero"
import { ExploreRecommendations } from "./ExploreRecommendations"

export const Explore = () => {
    const heroData = ExploreHeroData
    
    return (
        <section className="w-full bg-white h-auto py-32">
            <div className="container mx-auto px-2">
                <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-10 md:items-center max-w-6xl mx-auto">
                    <img src="/explore-hero-img1.png" 
                        alt="Woman with notebook (Mulher com notebook)" 
                        className="w-full md:max-w-[275px] lg:max-w-[545px] h-fit" />
                    <ExploreHero 
                        text={heroData.text}
                        subtitle={heroData.subtitle}
                        title={heroData.title}
                        button={heroData.button}
                    />
                </div>
                <ExploreRecommendations 
                    firstLine="Trusted By Over 13,400 Students & Organization."
                    secondLine="Recommended Around The World"
                />
            </div>
        </section>
    )
}
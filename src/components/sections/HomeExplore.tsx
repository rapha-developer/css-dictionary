import { repositoryHomeExploreUtils } from "../../core/utils/HomeExploreUtil"
import { SubsectionHero } from "../utils/SubsectionHero"

export const HomeExplore = () => {
    const homeExploreData = repositoryHomeExploreUtils['homeExplore']
    return (
        <section className="w-full bg-white h-auto py-32">
        <div className="container mx-auto px-2">
            <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-10 md:items-center max-w-6xl mx-auto">
                <img src="/explore-hero-img1.png" 
                    alt="Woman with notebook (Mulher com notebook)" 
                    className="w-full md:max-w-[275px] lg:max-w-[545px] h-fit" />
                <SubsectionHero 
                    text={homeExploreData.text}
                    subtitle={homeExploreData.subtitle}
                    title={homeExploreData.title}
                    button={homeExploreData.button}
                />
            </div>
        </div>
    </section>
    )
}
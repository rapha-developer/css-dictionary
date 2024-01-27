import { HeroGroupData } from "../../data"
import { WidgetHeroContainer } from "../widgets"
import { HeroGroup } from "./HeroGroup"

export const Hero = () => {
    const { title, subtitle } = HeroGroupData
    return (
        <div className="bg-transparent w-full h-auto">
            <div className="background-hero absolute top-0 left-0 w-full h-[665px] -z-50"></div>
            <div className="hero-content container mx-auto px-4 lg:px-8 pt-24 md:pt-56 relative">
                <div className="flex flex-col gap-10 md:flex-row md:gap-0 flex-grow justify-around relative z-10">
                    <HeroGroup 
                        title={title}
                        subtitle={subtitle}
                    />
                    <div className="sm:-mt-2 lg:pt-16 xl:pt-0 relative">
                        <img src="/hero-shape.svg" 
                        alt="White circle with many points" 
                        className="absolute top-0 left-0 md:-left-10 lg:top-10 lg:-left-32 -z-10" />
                        <img src="/hero-img-3.png" 
                        className="z-10"
                        alt="man and woman smiling" />
                    </div>
                </div>
                <WidgetHeroContainer />
            </div>
        </div>
    )
}

import { HeroSearchBar } from "../utils/HeroSearchBar";
import { WidgetSocialMedia } from "../utils/WidgetSocialMedia";

export const HomeHero = ({ subtitle, title }: {subtitle: string, title: string}) => {
    return (
        <div className="bg-transparent w-full h-auto">
            <div className="background-hero absolute top-0 left-0 w-full h-[665px] -z-50"></div>
            <div className="hero-content container mx-auto px-4 lg:px-8 pt-24 md:pt-56 relative">
                <div className="flex flex-col gap-10 md:flex-row md:gap-0 flex-grow justify-around relative auto">
                <div className="relative z-30">
                    <p className="font-outfit text-sm font-medium tracking-[0.6px] leading-snug text-white uppercase mb-1">{subtitle}</p>
                    <h1 className="font-outfit text-3xl lg:text-6xl font-semibold leading-snug text-white max-w-[644px] capitalize">{title}</h1>
                    <HeroSearchBar />
                    <img src="/active-bar.svg" alt="Yellow line" 
                    className="hidden sm:block absolute -z-10 top-14 right-10 lg:right-24 lg:top-20 xl:right-4" />
                </div>
                    <div className="sm:-mt-2 lg:pt-16 xl:pt-0 relative">
                        <img src="/hero-shape.svg" 
                        alt="White circle with many points" 
                        className="absolute top-0 left-0 md:-left-10 lg:top-10 lg:-left-32 -z-10" />
                        <img src="/hero-img-3.png" 
                        className="z-10"
                        alt="man and woman smiling" />
                    </div>
                </div>
                <WidgetSocialMedia />
            </div>
        </div>
    )
}
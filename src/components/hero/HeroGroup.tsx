import { HeroGroupProps } from "../../types/heroGroup"
import { HeroSearchBar } from "./HeroSearchBar"
import { HeroSubtitle } from "./HeroSubtitle"
import { HeroTitle } from "./HeroTitle"


export const HeroGroup = ( { subtitle, title }: HeroGroupProps) => {
    return (
        <div className="relative z-10">
            <HeroSubtitle text={subtitle}/>
            <HeroTitle text={title} />
            <HeroSearchBar />
            <img src="/active-bar.svg" alt="Yellow line" 
            className="hidden sm:block absolute -z-10 top-14 right-10 lg:right-24 lg:top-20 xl:right-4" />
        </div>
    )
}
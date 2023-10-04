import { Hero } from "../../types/hero"
import { CategoriesCollection } from "./CategoriesCollection"
import { CategoriesHero } from "./CategoriesHero"
import { CategoriesMiseEnScene } from "./CategoriesMiseEnScene"

type Props = {
    hero: Hero
}
export const Categories = ({ hero }: Props) => {
    return (
        <div className="ui-categories relative h-full">
            <CategoriesMiseEnScene />
            <div className="pt-4 sm:pt-0 sm:mt-28 xl:mt-8 h-fit xl:h-[750px] grid grid-cols-1 gap-2 xl:grid-cols-[60%_auto] xl:gap-none items-center">
                <CategoriesHero 
                    key={`k${hero.title}`}
                    title={hero.title}
                    subtitle={hero.subtitle}
                    description={hero.description}
                />
                <CategoriesCollection 
                    url="https://rapha-developer-laravel.000webhostapp.com/properties/alphabet"
                />
            </div>
        </div>
    )
}
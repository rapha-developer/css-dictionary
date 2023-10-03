import { Hero } from "../../types/hero"
import { CategoriesHero } from "./CategoriesHero"
import { CategoriesMiseEnScene } from "./CategoriesMiseEnScene"

type Props = {
    hero: Hero
}
export const Categories = ({ hero }: Props) => {
    return (
        <div className="h-full ui-categories relative">
            <CategoriesMiseEnScene />
            <CategoriesHero 
                key={`k${hero.title}`}
                title={hero.title}
                subtitle={hero.subtitle}
                description={hero.description}
            />
        </div>
    )
}
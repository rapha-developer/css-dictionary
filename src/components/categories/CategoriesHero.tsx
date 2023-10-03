import { Hero } from "../../types/hero"

export const CategoriesHero = ({ title, subtitle, description }: Hero) => {
    return (
        <div className="categoriesHero ml-28 md:ml-32 pt-44 pb-32 z-10">
            <div className="categoriesHeader mb-6">
                <div className="relative mb-4 pt-14">
                    <div className="absolute top-0 left-0 font-monoton font-normal hidden md:block text-7xl uppercase -z-[5] text-teal-400">{subtitle}</div>
                    <span className="font-inter font-semibold inline-block text-base text-amber-400 uppercase">{subtitle}</span>
                </div>
                <h3 className="font-inter font-semibold text-white rounded-full py-4 text-2xl md:text-4xl capitalize mb-2 max-w-xl">{title}</h3>
                <p className="font-inter font-medium text-white max-w-xs sm:max-w-sm lg:max-w-md">{description}</p>
            </div>
        </div>
    )
}
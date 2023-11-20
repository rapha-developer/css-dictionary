import { ArrowDownIcon } from "../../assets/ArrowDownIcon"
import { Hero } from "../../types/hero"


export const HomePageHero = ({ title, subtitle, description }: Hero) => {
    return (
        <div className="ml-28 md:ml-32 mt-36 mb-56">
            <div className="relative mb-4 pt-14">
                    <div className="absolute top-0 left-0 font-monoton font-normal hidden md:block text-7xl uppercase -z-[5] text-teal-400">{subtitle}</div>
                    <span className="font-inter font-semibold inline-block text-base text-amber-400 uppercase">{subtitle}</span>
            </div>
            <h1 className="font-inter text-3xl md:text-5xl lg:text-6xl font-bold text-white capitalize mb-5">
                {title}
            </h1>
            <p className="font-inter text-base font-medium text-white w-full max-w-xl mb-8">
                {description}
            </p>
            <button className="px-6 py-4 btn-attributes font-inter font-bold text-base text-white rounded-xl text-center flex capitalize hover:opacity-60">Check properties <ArrowDownIcon classNames="w-6 h-6 ml-4"/></button>
        </div>
    )
}
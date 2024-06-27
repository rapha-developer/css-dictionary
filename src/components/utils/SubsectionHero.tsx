import { HomeExploreUtilProps } from "../../core/utils/HomeExploreUtil"

export const SubsectionHero = ({ title, text, subtitle, button }: HomeExploreUtilProps) => {
    return (
        <div className="explore-hero max-w-xl">
            <span className="inline-block font-outfit font-medium text-sm text-body-100 leading-normal uppercase tracking-[0.6px]">{subtitle}</span>
            <h2 className="font-outfit font-semibold text-3xl md:text-4xl text-secondary !leading-[1.3] capitalize mb-7">{title}</h2>
            <p className="font-outfit text-base font-normal text-body-100 leading-7 capitalize mb-7">{text}</p>
            <a href={button.url} target="_blank" className="inline-block">
                <button className="font-outfit text-base font-medium tracking-[.2px] rounded-[50px] py-4 px-7 leading-normal text-white bg-primary hover:bg-secondary capitalize transition-all">
                    {button.text} <span className="text-base ml-2 fle items-center">{button.signal}</span>
                </button>
            </a>
        </div>
    )
}
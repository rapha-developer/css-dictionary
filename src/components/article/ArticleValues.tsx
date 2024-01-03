import { HorizontalBarData } from "../../data/HorizontalBarData"


export const ArticleValues = () => {
    const label = HorizontalBarData[2].text

    return (
        <div className="flex flex-col gap-4 md:gap-10 md:flex-row flex-grow border-2  border-red-200 max-w-4xl">
            <h2 className="mb-80 font-mono font-bold text-white text-2xl capitalize lg:min-w-[120px]" id={label}>{label}</h2>
            <div className="titulo-content">
                <p className="font-inter text-base text-slate-200 leading-7 mb-4">Values.</p>
            </div>
        </div>
    )
}
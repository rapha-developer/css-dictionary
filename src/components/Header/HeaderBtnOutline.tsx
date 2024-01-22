import { HeaderItem } from "../../types/headerItem"


export const HeaderBtnOutline = ({ url, text }: HeaderItem) => {
    return (
        <div className="relative group">
            <a
                href={url} 
                className="inline-block font-outfit py-3 px-7 text-base bg-secondary text-white rounded-[40px] font-medium capitalize group-hover:opacity-70">
                {text}
            </a>
        </div>
    )
}
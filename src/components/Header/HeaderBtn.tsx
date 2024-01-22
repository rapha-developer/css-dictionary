import { HeaderItem } from "../../types/headerItem"


export const HeaderBtn = ({ url, text }: HeaderItem) => {
    return (
        <div className="relative group">
            <a
                href={url} 
                className="inline-block font-outfit text-base text-inherit font-medium capitalize">
                {text}
            </a>
            <img src="/active-bar.svg" 
                alt="Active bar" 
                className={`hidden group-hover:block w-fit h-4 aspect-auto absolute left-0 top-4`} />
        </div>
    )
}
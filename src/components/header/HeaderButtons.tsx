import { NavLink } from "react-router-dom"

export const HeaderBtn = ({ url, text }: {url: string, text: string}) => {
    return (
        <div className="relative group">
            <NavLink
                to={url} 
                className="inline-block font-outfit text-base text-inherit font-medium capitalize">
                {text}
            </NavLink>
            <img src="/active-bar.svg" 
                alt="Active bar (yellow line)" 
                className={`hidden group-hover:block w-fit h-4 aspect-auto absolute left-0 top-4`} />
        </div>
    )
}
export const HeaderBtnOutline = ({ url, text }: { url: string, text: string }) => {
    return (
        <div className="relative group">
            <NavLink
                to={url} 
                className="inline-block font-outfit py-3 px-7 text-base bg-secondary text-white rounded-[40px] font-medium capitalize group-hover:opacity-70">
                {text}
            </NavLink>
        </div>
    )
}
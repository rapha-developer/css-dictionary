import { MagnifyGlassIcon } from "../../assets/icons"

export const HeroSearchBar = () => {
    return (
        <div className="mt-2 flex bg-white rounded-full">
            <div className="h-auto px-6 rounded-full bg-icon-widget-gold flex items-center">
                <MagnifyGlassIcon />
            </div>
            <input type="search" 
                placeholder="Search css properties here..."
                className="py-[14px] px-4 bg-white h-12 w-11/12 font-outfit text-sm font-medium rounded-full indent-2 focus-visible:outline-none"
            />
        </div>
    )
}


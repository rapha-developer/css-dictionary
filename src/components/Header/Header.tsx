import { MagnifyingGlassIcon } from "../../assets/icons/MagnifyingGlassIcon "

export const Header = () => {
    return (
        <header className="px-4 lg:px-10 h-28 flex items-center mb-4">
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center px-5 py-3 pointer-events-none rounded-md">
                    <MagnifyingGlassIcon classNames="h-4 w-4 text-primary-100 font-semibold" />
                </div>
                <input type="search" 
                    placeholder="Search properties"
                    className="p-2.5 pl-12 bg-white h-12 w-full font-red-hart text-lg font-medium text-primary-500 border-none rounded-lg focus-visible:outline-none"
                />
            </div>
        </header>
    )
}
import { HeaderSearchBar } from "./HeaderSearchBar"

export const Header = () => {
    return (
        <header className="px-4 lg:px-10 h-28 flex items-center mb-4">
            <HeaderSearchBar />
        </header>
    )
}
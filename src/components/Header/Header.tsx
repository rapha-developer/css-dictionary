import { useEffect, useState } from "react"
import { Logo } from "../logo"
import { BarIcon, CancelIcon } from "../../assets/icons"
import { HeaderItemsData } from "../../data";


export const Header = () => {
    const nav_menu = HeaderItemsData;

    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const handleScroll = () => {
        const scrollPos = window.scrollY
        setScrollPosition(scrollPos)
    }
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    const [hideMenu, setHideMenu] = useState(false)
    const onHandlerHideHeader = () => {
        setHideMenu(menuState => !menuState)
    }
    const headerClass = (scrollPosition === 0) ? 'md:bg-transparent md:text-white' : ''
    return (
        <header className={`bg-white text-secondary ${headerClass} fixed top-0 left-0 pt-4 md:pt-0 w-full h-auto md:h-20 z-50 transition-colors`}>
            <div className="container mx-auto xl:max-w-[1400px] flex flex-col md:flex-row lg:gap-32 items-center justify-between h-full rounded-3xl md:px-2 md:pb-0 xl:px-0">
                
                <div className="w-full md:w-auto flex justify-between px-4 md:px-0">
                    <Logo title="CSS Dictionary" />
                    <button onClick={onHandlerHideHeader} className="md:hidden">
                        {hideMenu && <BarIcon />}
                        {!hideMenu && <CancelIcon />}
                    </button>
                </div>
                <ul className={`nav-list flex flex-col md:flex-row gap-8 md:gap-10 items-center menu-hidden pb-3 md:pb-0`} aria-hidden={hideMenu} >
                    {Array.isArray(nav_menu) &&
                        nav_menu.length > 0 &&
                        nav_menu.map((navItem) => (
                            <div key={navItem.text} className="relative group">
                                <a
                                    href={navItem.url} 
                                    className="inline-block font-outfit text-base text-inherit font-medium capitalize">
                                    {navItem.text}
                                </a>
                                <img src="/active-bar.svg" 
                                    alt="Active bar" 
                                    className={`hidden group-hover:block w-fit h-4 aspect-auto absolute left-0 top-4`} />
                            </div>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}
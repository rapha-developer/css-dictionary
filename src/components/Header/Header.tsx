import { useEffect, useState } from "react"
import { HeaderItemsData } from "../../data";
import { HeaderFirstSection } from "./HeaderFirstSection";
import { HeaderBtn } from "./HeaderBtn";
import { HeaderBtnOutline } from "./HeaderBtnOutline";


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
                <HeaderFirstSection 
                    hideMenu={hideMenu}
                    onHandler={onHandlerHideHeader}
                />
                <ul className={`nav-list flex flex-col md:flex-row gap-8 md:gap-10 items-center menu-hidden pb-3 md:pb-0`} aria-hidden={hideMenu} >
                    {Array.isArray(nav_menu) &&
                        nav_menu.length > 0 &&
                        nav_menu.map((navItem) => (
                            <div className="header-item" key={navItem.text}>
                                {(!navItem.outline) &&
                                    <HeaderBtn 
                                        key={navItem.text} 
                                        text={navItem.text} 
                                        url={navItem.url}
                                        outline={navItem.outline}
                                    />
                                }
                                {(navItem.outline) &&
                                    <HeaderBtnOutline 
                                        key={navItem.text} 
                                        text={navItem.text} 
                                        url={navItem.url}
                                        outline={navItem.outline}
                                    />
                                }
                            </div>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}
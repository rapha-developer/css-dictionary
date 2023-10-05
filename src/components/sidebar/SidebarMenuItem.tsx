import { InformationCircleActiveIcon, InformationCircleIcon } from "../../assets/InformationCircleIcon"
import { BuilderLibraryActiveIcon, BuilderLibraryIcon } from "../../assets/BuilderLibraryIcon"
import { CogFunctionActiveIcon, CogFunctionIcon } from "../../assets/CogFunctionIcon"
import { HomeIcon, HomeIconActiveIcon } from "../../assets/HomeIcon"
import { BookOpenActiveIcon, BookOpenIcon } from "../../assets/BookOpenIcon"
import { Link } from "react-router-dom"
import { SidebarItem } from "../../types/sidebarItem"

export const SidebarMenuItem = ({ typeIcon, url }: SidebarItem) => {
    const iconClassNames = "w-6 h-6 text-teal-400 block group-hover:hidden" 
    const activeClassNames = "w-6 h-6 hidden group-hover:block" 
    
    return (
        <li className="py-2 px-6 hover:bg-accent-200 hover:gradient-red-line cursor-pointer relative group">
            <span className="sidebar-active-line hidden group-hover:block"></span>
            <Link to={url}>
            {(typeIcon === "Home") && 
            <>
                <HomeIcon 
                    classNames={iconClassNames}
                />
                <HomeIconActiveIcon 
                    classNames={activeClassNames}
                />
            </>
            }
            {(typeIcon === "BuilderLibrary") &&
            <>
                <BuilderLibraryIcon 
                    classNames={iconClassNames}
                />
                <BuilderLibraryActiveIcon 
                    classNames={activeClassNames}
                />
            </>
            }
            {(typeIcon === "CogFunction") &&
            <>
                <CogFunctionIcon 
                    classNames={iconClassNames}
                />
                <CogFunctionActiveIcon 
                    classNames={activeClassNames}
                />
            </>
            }
            {(typeIcon === "BookOpen") &&
            <>
                <BookOpenIcon 
                    classNames={iconClassNames}
                />
                <BookOpenActiveIcon 
                    classNames={activeClassNames}
                />
            </>
            }
            {(typeIcon === "InformationCircle") &&
            <>
                <InformationCircleIcon 
                    classNames={iconClassNames}
                />
                <InformationCircleActiveIcon 
                    classNames={activeClassNames}
                />
            </>
            }
            </Link>
        </li>
    )
}
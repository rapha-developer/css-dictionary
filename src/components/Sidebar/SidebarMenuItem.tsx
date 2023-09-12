import { Link } from "react-router-dom"
import { AcademicCapIcon } from "../../assets/icons/AcademicCapIcon"
import { BookOpenIcon } from "../../assets/icons/BookOpenIcon"
import { HomeIcon } from "../../assets/icons/HomeIcon"
import { Square3dIcon } from "../../assets/icons/Square3dIcon"
import { sidebarItem } from "../../types/sidebarItem"


export const SidebarMenuItem = ({text, iconName, url}: sidebarItem) => {
    const showHomeIcon = (iconName === "home") ? true : false
    const showSquareIcon = (iconName === "square3d") ? true : false
    const showAcademicIcon = (iconName === "academicCap") ? true : false
    const showBookOpenIcon = (iconName === "bookOpen") ? true : false
    return (
        <li className="grid gap-4 justify-items-center cursor-pointer group">
            <div className="p-3 max-w-min bg-backgrounds-100 group-hover:bg-accent-300 group-hover:sidebar-active-shadow rounded-lg">
                <Link to={url}>
                {showHomeIcon && <HomeIcon classNames="w-6 h-6 text-accent-100 group-hover:text-white group-hover:font-semibold"/>}
                {showSquareIcon && <Square3dIcon classNames="w-6 h-6 text-accent-100 group-hover:text-white group-hover:font-semibold"/>}
                {showAcademicIcon && <AcademicCapIcon classNames="w-6 h-6 text-accent-100 group-hover:text-white group-hover:font-semibold"/>}
                {showBookOpenIcon && <BookOpenIcon classNames="w-6 h-6 text-accent-100 group-hover:text-white group-hover:font-semibold"/>}
                </Link>
            </div>
            <p className="font-inter text-sm font-normal text-primary-100 group-hover:text-accent-300 capitalize hidden md:block">{text}</p>
        </li>
    )
}
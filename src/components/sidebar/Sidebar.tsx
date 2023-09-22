
import { SidebarConfigMenu } from "./SidebarConfigMenu";
import { SidebarHeader } from "./SidebarHeader"
import { SidebarMainMenu } from './SidebarMainMenu';

export const Sidebar = () => {
    return (
        <aside className="fixed w-[72px] my-4 md:my-8 mx-4 md:mx-8 sidebar-height py-4 sidebar-attributes flex flex-col">
            <SidebarHeader />
            <SidebarMainMenu />
            <hr className="sidebar-hr"  />
            <SidebarConfigMenu />
        </aside>
    )
}
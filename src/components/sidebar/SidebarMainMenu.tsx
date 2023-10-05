import { SidebarMenuDataList } from "../../data/SidebarData";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const SidebarMainMenu = () => {
    const sidebarItems = SidebarMenuDataList

    const empty = 0
    return (
        <ul className="flex flex-col gap-10">
            {Array.isArray(sidebarItems) &&
            sidebarItems.length > empty &&
            sidebarItems.map(sidebarItem => (
                <SidebarMenuItem 
                    key={`kSidebarItem-${sidebarItem.typeIcon}`}
                    typeIcon={sidebarItem.typeIcon}
                    url={sidebarItem.url}
                />
            ))
            }
        </ul>
    )
}
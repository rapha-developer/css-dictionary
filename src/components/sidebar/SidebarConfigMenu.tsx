import { SidebarConfigDataList } from "../../data/SidebarData";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const SidebarConfigMenu = () => {
    const sidebarItems = SidebarConfigDataList
    const empty = 0;
    return (
        <ul className="flex flex-col justify-between h-full">
            {Array.isArray(sidebarItems) &&
            sidebarItems.length > empty &&
            sidebarItems.map(sidebarItem => (
                <SidebarMenuItem 
                    key={`kSidebarConfigMeu-${sidebarItem.typeIcon}`}
                    typeIcon={sidebarItem.typeIcon}
                />
            ))
            }
        </ul>
    )
}
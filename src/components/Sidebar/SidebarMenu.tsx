import { sidebarItems } from "../../data/ItemsData";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const SidebarMenu = () => {
    const zero = 0
    return (
        <ul className="flex flex-col gap-7 pt-14 mx-auto">
            {Array.isArray(sidebarItems) &&
                sidebarItems.length > zero &&
                sidebarItems.map((item) => (
                    <SidebarMenuItem
                        key={`kSidebarItem-${item.text}`} 
                        text={item.text}
                        iconName={item.iconName}
                        url={item.url}
                    />
                ))
            }
        </ul>
    )
}
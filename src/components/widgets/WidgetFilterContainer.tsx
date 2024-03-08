import { WidgetFilterListData } from "../../data";
import { WidgetHeroElement } from "./WidgetHeroElement";

export const WidgetFilterContainer = () => {
    
    const widgetList = WidgetFilterListData
    return (
        <div className="w-11/12 sm:max-w-fit mx-auto bg-gray-300 py-7 px-3 sm:px-7 flex flex-wrap justify-center gap-6 rounded-2mxl relative">
            {Array.isArray(widgetList) &&
            widgetList.length > 0 &&
            widgetList.map((widgetItem) => (
                <WidgetHeroElement 
                    key={widgetItem.heading}
                    heading={widgetItem.heading} 
                    description={widgetItem.description}
                    iconColor={widgetItem.iconColor}
                    iconType={widgetItem.iconType}
                    url={widgetItem.url}
                />
            ))
            }
        </div>
    )
}
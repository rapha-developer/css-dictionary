import { WidgetListData } from "../../data";
import { WidgetHeroElement } from "./WidgetHeroElement";

export const WidgetHeroContainer = () => {
    
    const widgetList = WidgetListData
    return (
        <div className="w-full bg-white py-7 px-3 sm:px-7 flex flex-wrap justify-center gap-6 -mt-20 sm:-mt-32 md:-mt-20 rounded-2mxl box-shadow-widget relative z-20">
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
import { HorizontalBarData } from "../../data/HorizontalBarData";
import { UiBtnAnchor } from "./UiBtnAnchor";


export const UiHorizontalBar = () => {

    const buttonsData = HorizontalBarData
    return (
        <div className="ml-28 md:ml-32 mr-4 flex flex-grow justify-center bg-transparent">
            <div className="sidebar-attributes py-3 px-4 h-auto flex flex-col gap-8 md:flex-row flex-grow justify-center">    
                {Array.isArray(buttonsData) &&
                buttonsData.length > 0 &&
                buttonsData.map((buttonItem) => (
                    <UiBtnAnchor text={buttonItem.text} key={buttonItem.text} />
                ))
                }
            </div>
        </div>
    )
}
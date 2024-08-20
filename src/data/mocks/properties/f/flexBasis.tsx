import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function FlexTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `40%`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full relative">
            <div className="relative w-full h-64 md:h-44 py-5 px-2">
                <img src="/dark-grid.PNG" 
                    alt="Dark grid" 
                    className="absolute top-0 left-0 object-cover z-10 w-full h-full"
                />
                <div className="flex-container flex flex-wrap relative z-20" style={{flexBasis: inheritValue}}>
                    <div className="flex h-24 bg-icon-widget-red p-2">
                        red div
                    </div>
                    <div className="flex h-24 bg-icon-widget-emerald p-2" style={{flex: `0 0 ${value}`, flexBasis: value}}>
                        emerald div
                    </div>
                    <div className="flex h-24 bg-icon-widget-pink p-2">
                        pink div
                    </div>
                </div>
            </div>
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
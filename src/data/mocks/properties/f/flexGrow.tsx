import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function FlexGrowTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `5`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full relative">
            <div className="relative w-full h-64 md:h-44 py-5 px-2">
                <div className="flex-container flex flex-wrap relative z-20" style={{flexGrow: inheritValue}}>
                    <div className="h-10 bg-icon-widget-red p-2" style={{flexGrow: '1'}}>
                        red div
                    </div>
                    <div className="h-10 bg-icon-widget-emerald p-2" style={{flexGrow: value}}>
                        emerald div
                    </div>
                    <div className="h-10 bg-icon-widget-gold p-2" style={{flexGrow: '1'}}>
                        gold div
                    </div>
                    <div className="h-10 bg-icon-widget-pink p-2" style={{flexGrow: '1'}}>
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
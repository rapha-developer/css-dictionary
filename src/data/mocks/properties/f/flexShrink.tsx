import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function FlexShrinkTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `2`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full relative">
            <div className="relative w-full h-auto py-5 px-2">
                <div className="flex-container flex relative z-20" style={{flexShrink: inheritValue}}>
                    <div className="h-10 bg-icon-widget-red p-2 basis-32 md:basis-48" style={{flexGrow: '1', flexShrink: '1'}}>
                        red
                    </div>
                    <div className="h-10 bg-icon-widget-emerald p-2 basis-32 md:basis-48" style={{flexGrow: '1', flexShrink: value}}>
                        emerald
                    </div>
                    <div className="h-10 bg-icon-widget-gold p-2 basis-32 md:basis-48" style={{flexGrow: '1', flexShrink: '1'}}>
                        gold
                    </div>
                    <div className="h-10 bg-icon-widget-pink p-2 basis-32 md:basis-48" style={{flexGrow: '1', flexShrink: '1'}}>
                        pink
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
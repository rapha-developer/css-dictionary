import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function FlexWrapTemplate({ name, value }: {name: string, value: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit'}) {
    const inheritValue = `wrap`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full relative">
            <div className="relative w-full h-auto py-5 px-2" style={{flexWrap: inheritValue}}>
                <div className="flex-container flex relative w-60 mx-auto min-h-16 bg-fuchsia-100 py-4 px-3 z-20" style={{flexWrap: value}}>
                    <div className="flex h-fit bg-icon-widget-red p-2">
                        red div
                    </div>
                    <div className="flex h-fit bg-icon-widget-emerald p-2">
                        emerald div
                    </div>
                    <div className="flex h-fit bg-icon-widget-gold p-2">
                        gold div
                    </div>
                    <div className="flex h-fit bg-icon-widget-pink p-2">
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
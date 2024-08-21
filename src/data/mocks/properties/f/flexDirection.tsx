import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function FlexDirectionTemplate({ name, value }: {name: string, value: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit"}) {
    const inheritValue = `row-reverse`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full relative">
            <div className="relative w-full h-64 md:h-44 py-5 px-2" style={{flexDirection: inheritValue}}>
                <div className="flex-container flex flex-wrap relative z-20" style={{flexDirection: value}}>
                    <div className="flex h-10 bg-icon-widget-red p-2">
                        red div
                    </div>
                    <div className="flex h-10 bg-icon-widget-emerald p-2">
                        emerald div
                    </div>
                    <div className="flex h-10 bg-icon-widget-gold p-2">
                        gold div
                    </div>
                    <div className="flex h-10 bg-icon-widget-pink p-2">
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function outlineOffsetTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `5px`
    const outline = `5px inset red`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-56 h-56 mx-auto p-4" style={{outlineOffset: inheritValue}}>
                <div className="w-full h-full bg-orange-300 font-outfit text-base font-semibold"
                    style={{outline: outline, outlineOffset: value}}
                >
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
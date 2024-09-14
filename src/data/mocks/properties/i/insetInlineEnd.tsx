import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function insetInlineEndTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `5px`
    return (
        <div className="flex flex-col gap-4 justify-center px-4 py-6 w-full h-full relative">
            <div className="border-2 border-solid border-pink-300 rounded-md h-28 relative" style={{insetInlineEnd: inheritValue}}>
                <div className="absolute h-24 py-4 px-2 bg-pink-200 rounded-md font-outfit text-secondary font-semibold text-base" 
                    style={{insetInlineEnd: value}}>
                    Defina inset-inline-end para {value}
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
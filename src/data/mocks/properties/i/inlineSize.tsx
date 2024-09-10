import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function InlineSizeTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `100%`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{inlineSize: inheritValue}}>
            <div className="h-full py-4 px-2 bg-pink-200 rounded-md font-outfit text-secondary font-semibold text-base" 
                style={{inlineSize: value}}>
                Defina inline-size para {value}
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
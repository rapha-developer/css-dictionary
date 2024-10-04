import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function maxInlineSizeTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `auto`
    const text = 'Diferentes valores para diferentes max-block-size'
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{maxInlineSize: inheritValue}}>
                <div className="px-2 py-4 w-full h-full bg-pink-200 rounded-md" style={{maxInlineSize: value}}>
                    <p className="font-outfit text-base font-semibold">{text}</p>
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
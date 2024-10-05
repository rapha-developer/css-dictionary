import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function minInlineSizeTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `auto`
    const text = 'Diferentes valores para diferentes min-inline-size'
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className={(value.includes('%') ? 'w-full h-full px-2' : 'w-52 h-full')} style={{minInlineSize: inheritValue}}>
                <p className="border border-solid border-red-800 font-outfit text-base font-semibold bg-pink-200 rounded-md inline-block" style={{minInlineSize: value}}>{text}</p>
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
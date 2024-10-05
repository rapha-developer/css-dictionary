import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function minBlockSizeTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `auto`
    const text = 'Diferentes valores para diferentes min-block-size'
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="px-2 py-4 w-full h-48 rounded-md" style={{minBlockSize: inheritValue}}>
                <div className="w-full bg-pink-200 rounded-md px-2" style={{minBlockSize: value}}>
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
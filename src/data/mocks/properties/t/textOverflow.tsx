import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function textOverflowTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `ellipsis`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{textOverflow: inheritValue}}>
                <div className="font-outfit text-base font-medium text-secondary w-40 mx-auto whitespace-nowrap overflow-hidden border-2 border-dotted border-red-400" style={{textOverflow: value}}>
                    Esse texto será cortado pela pela propriedade text-overflow
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
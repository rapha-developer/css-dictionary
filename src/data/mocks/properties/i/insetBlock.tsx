import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function insetBlockTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `5px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full h-full min-h-44 relative">
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
            <div className="border-2 border-solid border-pink-300 rounded-md min-h-28 h-full relative" style={{insetBlock: inheritValue}}>
                <div className="absolute w-4/5 h-24 py-4 px-2 bg-pink-200 rounded-md font-outfit text-secondary font-semibold text-base" 
                    style={{insetBlock: value}}>
                    Defina inset-block para {value}
                </div>
            </div>
        </div>
    )
}
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function LeftTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `-15px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full min-h-32 relative bg-pink-200 px-2 py-3 rounded-sm" style={{left: inheritValue}}>
                <div className="bg-pink-300 rounded-sm h-full w-32 absolute top-0 px-2" 
                style={{left: value}}>
                    <span className="font-outfit text-secondary text-xl font-semibold text-center">left: {value}</span>
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
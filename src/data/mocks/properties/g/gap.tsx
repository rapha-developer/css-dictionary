import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function GapTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `20px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{gap: inheritValue}}>
            <div className="w-full h-full flex flex-wrap py-3 px-2 bg-red-300 rounded-lg" style={{gap: value}}>
                <div className="w-32 h-16 rounded-sm bg-red-200"></div>
                <div className="w-32 h-16 rounded-sm bg-red-200"></div>
                <div className="w-32 h-16 rounded-sm bg-red-200"></div>
                <div className="w-32 h-16 rounded-sm bg-red-200"></div>
                <div className="w-32 h-16 rounded-sm bg-red-200"></div>
                <div className="w-32 h-16 rounded-sm bg-red-200"></div>
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
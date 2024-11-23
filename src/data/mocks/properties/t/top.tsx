import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function topTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `35px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full min-h-32 relative bg-red-300 rounded-md mb-10" 
                style={{top: inheritValue}}>
                <div className="w-16 h-16 bg-purple-600 rounded-md absolute left-0" style={{top: value}}></div>
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
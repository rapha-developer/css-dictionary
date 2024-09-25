import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function MarginBlockTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `5px 10px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-60 bg-pink-200 rounded-md" style={{marginBlock: inheritValue}}>
                <div className="bg-pink-300 h-8 w-12 rounded-md" style={{marginBlock: value}}>
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
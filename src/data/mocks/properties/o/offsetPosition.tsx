import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function offsetPositionTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `top center`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <div className="border-4 border-dotted border-primary w-40 h-40 rounded-lg mx-auto"
                    style={{offsetPosition: inheritValue}}>
                    <div className="w-16 h-16 bg-green-300 rounded-md"
                        style={{offsetPath: 'ray(45deg)', offsetPosition: value}}></div>
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
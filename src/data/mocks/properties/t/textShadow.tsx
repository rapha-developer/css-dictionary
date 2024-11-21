import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function textShadowTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `5px 5px 10px blue`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{textShadow: inheritValue}}>
                <p className="font-outfit font-medium text-xl text-secondary text-center" style={{textShadow: value}}>Selecione diferentes valores para o text-shadow ao lado</p>
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
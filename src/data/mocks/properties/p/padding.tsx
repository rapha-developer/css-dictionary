import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function paddingTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `10px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full bg-pink-200 rounded-md" style={{padding: inheritValue}}>
                <div className="w-52 h-56 bg-green-200 rounded-md font-outfit text-lg text-secondary" 
                    style={{padding: value}}>
                    Escolha diferentes valores de padding nas opções ao lado
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function paddingInlineTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `20px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full bg-pink-200 rounded-md" style={{paddingInline: inheritValue}}>
                <div className="w-52 h-56 bg-green-200 rounded-md font-outfit text-lg text-secondary" 
                    style={{paddingInline: value}}>
                    Escolha diferentes valores de padding-inline nas opções ao lado
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
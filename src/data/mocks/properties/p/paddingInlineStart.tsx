import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function paddingInlineStartTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `10px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full bg-pink-200 rounded-md" style={{paddingInlineStart: inheritValue}}>
                <div className="w-52 h-56 bg-primary/90 border border-solid rounded-md font-outfit text-lg text-white px-2" 
                    style={{paddingInlineStart: value}}>
                    Escolha diferentes valores de padding-inline-start nas opções ao lado
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
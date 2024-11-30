import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function wordSpacingTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `12px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{wordSpacing: inheritValue}}>
                <p className="font-outfit text-base font-medium text-secondary" style={{wordSpacing: value}}>
                    Clique nas diferentes opções ao lado para ver o resultado dos diferentes valores da propriedade word-spacing
                </p>
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
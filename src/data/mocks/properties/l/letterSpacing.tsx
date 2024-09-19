import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function LetterSpacingTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `25px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full px-2 md:px-4 py-3" style={{letterSpacing: inheritValue}}>
                <p className="font-outfit text-secondary text-xl font-semibold text-center"
                style={{letterSpacing: value}}>
                    A propriedade letter-spacing define o espaço entre os caracteres
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function LineHeightTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `100%`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full px-2 md:px-4 py-3" style={{lineHeight: inheritValue}}>
                <p className="font-outfit text-secondary text-xl font-semibold text-center"
                style={{lineHeight: value}}>
                    O exemplo aqui aplica diferentes line-heights ao texto, de modo que ao clicar nas diferentes opções da propriedade ao lado é possível destacar o que cada valor interfere no modo como é apresentado o texto.
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
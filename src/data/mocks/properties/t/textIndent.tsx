import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function textIndentTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `3px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{textIndent: inheritValue}}>
                <p className="font-outfit font-medium text-secondary text-base mb-10" style={{textIndent: value}}>
                    Este exemplo demonstra diferentes recuos de texto. Tente alterar o recuo de texto clicando em uma das propriedades para text-indent à esquerda e veja o resultado neste elemento.
                </p>
                <p className="font-outfit font-medium text-secondary text-base" style={{textIndent: value}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
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
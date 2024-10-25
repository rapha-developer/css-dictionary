import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function overflowTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `auto`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{overflow: inheritValue}}>
                <div className="w-52 h-28 border border-solid border-primary p-1 font-outfit text-base text-secondary mx-auto" style={{overflow: value}}>
                    Esta propriedade especifica se deve recortar o conteúdo ou adicionar barras de rolagem quando o conteúdo de um elemento for muito grande para caber em uma área especificada.
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
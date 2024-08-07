import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function ColorTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `#FB773C`
    return (
        <div className="flex flex-col gap-4 px-4 w-full" style={{color: inheritValue}}>
            <p className="font-outfit font-semibold text-base text-center" style={{color: value}}>
                Essa propriedade muda a cor do texto
            </p>
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
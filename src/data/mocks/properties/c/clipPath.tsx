import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function ClipPathTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 w-full" style={{clipPath: inheritValue}}>
            <div className="bg-borderLine rounded-md h-28 py-3 px-5 relative" 
                style={{clipPath: value}}>
                    <span className="block absolute top-12 left-8 font-outfit text-secondary font-semibold">
                Veja quao diferentes valores para o clip-path afeta o elemento DIV.
                </span>
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
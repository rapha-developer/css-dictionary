import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BorderLeftTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `2px dotted crimson`
    return (
        <div className="flex flex-col gap-4 py-4" style={{borderLeft: inheritValue}}>
            <div className="w-3/4 h-20 rounded-md mx-auto flex items-center justify-center"
            style={{borderLeft: value}}>
                <p className="font-outfit text-sm text-secondary font-normal text-center">Muda a borda esquerda</p>
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BorderTopLeftRadiusTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `25%`
    return (
        <div className="flex flex-col gap-4 py-4" style={{borderTopLeftRadius: inheritValue}}>
            <div className="w-3/4 h-20 rounded-md mx-auto flex items-center justify-center border-2 border-solid border-red-800 bg-borderLine"
            style={{borderTopLeftRadius: value}}>
                <p className="font-outfit text-sm text-secondary font-normal text-center">Arrendonda a borda do canto esquerdo superior</p>
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
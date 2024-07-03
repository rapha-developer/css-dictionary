import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function animationFillModeTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = "forwards"
    return (
        <div className="flex flex-col gap-4" style={{animationFillMode: inheritValue}}>
            <div className={`mx-auto h-12 w-12 rounded-md background-hero flex justify-center items-center animate-growUp-medium delay-500`}
            style={{animationFillMode: value}}>
                <span className="font-outfit text-2xl font-semibold text-center text-body-200">01</span>
            </div>
            <InheritTemplate 
                property={{name: name, value: value}}
                inheritValue={inheritValue}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
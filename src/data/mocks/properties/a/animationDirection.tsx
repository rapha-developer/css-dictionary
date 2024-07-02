import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function AnimationDirectionTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = "reverse"
    return (
        <div className="flex flex-col gap-4" style={{animationDirection: inheritValue}}>
            <div className={`h-16 w-16 rounded-md background-hero mx-auto flex justify-center items-center animate-spin`}
            style={{animationDirection: value}}>
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
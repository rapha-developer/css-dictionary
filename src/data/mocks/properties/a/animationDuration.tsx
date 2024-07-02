import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function animationDurationTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = "2s"
    return (
        <div className="flex flex-col gap-4" style={{animationDuration: inheritValue}}>
            <div className={`mx-auto h-12 w-12 rounded-md background-hero flex justify-center items-center animate-spin`}
            style={{animationDuration: value}}>
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
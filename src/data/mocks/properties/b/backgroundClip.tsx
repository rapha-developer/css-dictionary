import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundClipTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `content-box`
    return (
        <div className="flex flex-col gap-4" style={{backgroundClip: inheritValue}}>
            <div className="border-8 border-dotted border-red-600 w-full h-24 bg-borderLine p-4"
                style={{backgroundClip: value}}>
                <p className="font-outfit text-sm font-semibold text-secondary text-center">
                    O {name} é {value}
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

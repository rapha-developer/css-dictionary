import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function AnimationPlayStateTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `paused`
    return (
        <div className="flex flex-col gap-4" style={{animationPlayState: inheritValue}}>
            <div className="mx-auto h-12 w-12 rounded-md background-hero flex justify-center items-center animate-bounce" 
                style={{animationPlayState: value}}>
                <span className="font-outfit text-2xl font-semibold text-center text-body-200">01</span>
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
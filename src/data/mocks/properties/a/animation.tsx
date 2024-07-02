import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function AnimationTemplate({ name, value }: PropertyTemplateProps['property']) {
    const classNames = `mx-auto h-12 w-12 rounded-md background-hero flex justify-center items-center animate-${value}`
    return (
        <div className="flex flex-col gap-4">
            <div className={classNames}>
                <span className="font-outfit text-2xl font-semibold text-center text-body-200">01</span>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
} 
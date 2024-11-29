import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function whiteSpaceTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <div className="mx-auto w-52 h-32 font-outfit font-medium text-lg text-secondary bg-pink-300/80 rounded-md p-2" style={{whiteSpace: value}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
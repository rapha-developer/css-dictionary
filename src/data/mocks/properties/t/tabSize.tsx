import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function tabSizeTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <pre id="pre" 
                className="border-2 border-dotted border-red-300"
                style={{tabSize: value}}>
                    Text	with	tabs	instead	of	spaces.
                </pre>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
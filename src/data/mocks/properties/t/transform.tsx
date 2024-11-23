import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function transformTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <div className="mx-auto w-64 h-80 bg-pink-300 rounded-md p-2 py-3" style={{transform: value}}>
                    <p className="font-outfit font-medium text-xl text-secondary">Veja o que os diferentes valores para transformação faz com essa DIV.</p>
                </div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
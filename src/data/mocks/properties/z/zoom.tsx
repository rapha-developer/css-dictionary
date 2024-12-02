import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function zoomTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{zoom: value}}>
                <div className="mx-auto w-24 h-24 py-4 bg-pink-300 rounded-full text-center font-outfit font-medium text-secondary">
                    zoom
                </div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
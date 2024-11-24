import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function transformOriginTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
            <div className="w-full h-64 bg-purple-300 rounded-md relative">
                <div className="w-48 h-48 bg-red-400 rounded-md absolute" 
                    style={{transform: 'rotate(45deg)', transformOrigin: value}}>
                    <p className="font-outfit text-secondary font-medium text-base text-center">Div com rotação</p>
                </div>
            </div>
        </div>
    )
}
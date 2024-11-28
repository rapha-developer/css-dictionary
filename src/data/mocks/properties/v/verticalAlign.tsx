import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function verticalAlignTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <p className="font-outfit text-base font-normal text-secondary text-center">
                Neste parágrafo, o <span className="bg-cyan-200 px-2 rounded-lg" style={{verticalAlign: value}}>elemento em azul</span> altera o valor de alinhamento vertical
                </p>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
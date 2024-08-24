import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function FontFaceTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <p className="font-outfit font-normal text-secondary text-sm">         
                    A propriedade @font-face deve ser usada em um arquivo css, definindo as particularidades (como nome ou local) da fonte a ser usada
                </p>
            </div>
            <CopyAndPasteTemplate 
                name={`@${name}`}
                value={value}
            />
        </div>
    )
}
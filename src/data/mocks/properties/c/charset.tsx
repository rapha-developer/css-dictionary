import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function CharsetTemplate({ value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <p className="font-outfit text-secondary font-normal text-center">
                @charset é uma propriedade que deve ser usada na primeira linha de um arquivo css
            </p>
            <CopyAndPasteTemplate 
                name={'@charset'}
                value={value}
            />
        </div>
    )
}
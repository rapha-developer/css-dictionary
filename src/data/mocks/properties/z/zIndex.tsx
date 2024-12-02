import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function zIndexTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-96 mx-auto h-full min-h-32 relative">
                <div className="absolute top-0 left-0 w-32 h-16 rounded-md bg-pink-300 py-4 text-center text-secondary font-semibold z-[1]">DIV 1</div>
                <div className="absolute top-10 left-10 w-32 h-16 rounded-md bg-green-300 py-4 text-center text-secondary font-semibold z-[2]">DIV 2</div>
                <div className="absolute top-20 left-20 w-32 h-16 rounded-md bg-orange-300 py-4 text-center text-secondary font-semibold z-[3]">DIV 3</div>
                <div className="absolute top-0 left-20 w-32 h-32 rounded-md bg-slate-300 py-4 text-center text-secondary font-semibold" style={{zIndex: value}}>DIV 4</div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function GridAreaTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" >
            <div className="w-full h-full grid gap-3 py-3 px-2 bg-pink-300">
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200" style={{gridArea: value}}>1</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200">2</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200">3</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200">4</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200">5</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200">6</div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function translateTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full min-h-48 lg:min-h-40 relative bg-slate-200/80 rounded-lg" style={{perspective: '200px'}}>
                <div className="absolute top-2 left-2 bg-red-400 p-10 rounded-lg" style={{translate: value}}>
                    <p className="font-outfit text-base font-medium text-white text-center">1</p>
                </div>
                <p className="absolute bottom-3 left-0 w-full font-outfit text-secondary font-medium text-lg text-center">O elemento pai (com background azul) tem perspective como valor 200 👆</p>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
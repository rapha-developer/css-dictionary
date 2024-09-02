import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function GridAutoFlowTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" >
            <div className="w-full h-full grid gap-3 py-3 px-2 bg-pink-300 rounded-lg" style={{gridTemplateColumns: 'auto auto auto', gridTemplateRows: 'auto auto', gridAutoFlow: value}}>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200 rounded-lg">1</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200 rounded-lg">2</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200 rounded-lg" style={{gridColumn: 'auto / span 2'}}>3</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200 rounded-lg">4</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200 rounded-lg">5</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200 rounded-lg">6</div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
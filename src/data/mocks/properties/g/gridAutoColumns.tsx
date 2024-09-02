import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function GridAutoColumnsTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" >
            <div className="w-full h-full grid gap-3 py-3 px-2 bg-pink-300 rounded-lg" style={{gridAutoColumns: value}}>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200 rounded-lg" style={{gridArea: '1 / 1 / 2 / 2'}}>1</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200 rounded-lg" style={{gridArea: '1 / 2 / 2 / 3'}}>2</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200 rounded-lg" style={{gridArea: '1 / 3 / 2 / 4'}}>3</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200 rounded-lg" style={{gridArea: '2 / 1 / 3 / 2'}}>4</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200 rounded-lg" style={{gridArea: '2 / 2 / 3 / 3'}}>5</div>
                <div className="w-full h-full p-5 text-center text-xl bg-pink-200 rounded-lg" style={{gridArea: '2 / 3 / 3 / 4'}}>6</div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
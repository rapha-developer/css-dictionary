import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function GridTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `50px / auto auto auto`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{grid: inheritValue}}>
            <div className="w-full h-full grid gap-3 py-3 px-2 bg-pink-300" style={{grid: value}}>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200">1</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200">2</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200">3</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200">4</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200">5</div>
                <div className="w-full h-full p-5 text-center text-md bg-pink-200">6</div>
            </div>
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
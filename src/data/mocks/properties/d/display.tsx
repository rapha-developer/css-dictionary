import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function DisplayTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `block`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full flex-col gap-4 bg-pink-500/25 rounded-md min-h-32 border-[5px] border-solid  border-pink-300" style={{display: inheritValue}}>
                <div style={{display: value, rowGap: '8px'}} className="p-3 border-[3px] border-solid border-orange-500">
                    <button className="bg-primary rounded-md py-3 px-5 text-white font-outfit font-semibold mr-2">Item 1</button>
                    <button className="bg-primary rounded-md py-3 px-5 text-white font-outfit font-semibold mr-2">Item 2</button>
                    <button className="bg-primary rounded-md py-3 px-5 text-white font-outfit font-semibold">Item 3</button>
                </div>
                <div style={{display: value, rowGap: '8px'}} className="p-3 border-[3px] border-solid  border-purple-400 min-h-10">
                    <button className="bg-primary rounded-md py-3 px-5 text-white font-outfit font-semibold mr-2">Item 1</button>
                    <button className="bg-primary rounded-md py-3 px-5 text-white font-outfit font-semibold mr-2">Item 2</button>
                    <button className="bg-primary rounded-md py-3 px-5 text-white font-outfit font-semibold mr-2">Item 3</button>
                </div>
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
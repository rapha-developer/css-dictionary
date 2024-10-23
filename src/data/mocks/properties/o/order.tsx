import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function orderTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `2`
    const anotherOrders = [1,2,3,4].filter((item) => item !== Number.parseInt(value))
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full flex" style={{order: inheritValue}}>
                <div className="w-24 h-24 rounded-md bg-pink-300" style={{order: value}}></div>
                <div className="w-24 h-24 rounded-md bg-green-300" style={{order: anotherOrders[0]}}></div>
                <div className="w-24 h-24 rounded-md bg-cyan-300"  style={{order: anotherOrders[1]}}></div>
                <div className="w-24 h-24 rounded-md bg-amber-300" style={{order: anotherOrders[2]}}></div>
                
            </div>
            <div className="" style={{order: inheritValue+1}}>
                <InheritTemplate 
                    inheritValue={inheritValue}
                    property={{name: name, value: value}}
                />
                <CopyAndPasteTemplate 
                    name={name}
                    value={value}
                />
            </div>
        </div>
    )
}
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function placeItemsTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `normal`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{placeItems: inheritValue}}>
            <div className="w-full h-80 border-4 border-dotted border-red-400 rounded-sm p-4 grid gap-1" 
            style={{gridTemplateColumns: 'repeat(3, 1fr)', 
                gridTemplateRows: 'repeat(3, 1fr)',
                placeItems: value}}>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">1</div>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">2</div>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">3</div>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">4</div>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">5</div>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">6</div>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">7</div>
                <div className="p-5 bg-orange-300 rounded-md font-outfit text-secondary text-xl text-center">8</div>
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
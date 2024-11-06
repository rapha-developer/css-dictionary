import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function positionTemplate({ name, value }: {name: string, value: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'}) {
    const inheritValue = `relative`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full min-h-36 border-2 border-dotted border-green-400" 
                style={{position: 'relative'}}>
                <div className="w-28 h-28 bg-purple-600 rounded-md p-4 top-4 left-2/4" style={{position: value}}>
                    <p className="font-outfit text-xl font-medium text-white">
                        position: {value}
                    </p>
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function JustifyContentTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `center`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{justifyContent: inheritValue}}>
            <div className="w-full h-full flex" 
            style={{justifyContent: value}}>
                <div className="h-12 rounded-sm w-12 bg-pink-300 font-outfit text-secondary text-xl font-semibold text-center p-2">1</div>
                <div className="h-12 rounded-sm w-12 bg-orange-300 font-outfit text-secondary text-xl font-semibold text-center p-2">2</div>
                <div className="h-12 rounded-sm w-12 bg-green-300 font-outfit text-secondary text-xl font-semibold text-center p-2">3</div>
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
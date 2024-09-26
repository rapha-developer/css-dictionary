import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function MarginBlockStartTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `15%`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full rounded-md" style={{marginBlockStart: inheritValue}}>
                <div className="w-full h-10 bg-pink-200 rounded-md font-outfit text-xl text-secondary font-semibold text-center">1</div>
                <div className="w-full h-10 bg-pink-400 rounded-md font-outfit text-xl text-secondary font-semibold text-center" 
                style={{marginBlockStart: value}}>2</div>
                <div className="w-full h-10 bg-pink-200 rounded-md font-outfit text-xl text-secondary font-semibold text-center">3</div>
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
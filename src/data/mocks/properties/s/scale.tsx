import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function scaleTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `1`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full border-2 border-dotted border-green-300" style={{scale: inheritValue}}>
                <div className="mx-auto w-32 h-16 bg-red-400 rounded-md py-4 text-center font-outfit text-xl font-normal text-secondary" style={{scale: value}}>scale</div>
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
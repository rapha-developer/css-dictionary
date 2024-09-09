import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function HeightTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `150px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full border-4 border-solid border-pink-300 rounded-lg" style={{height: inheritValue}}>
                <div className="w-full rounded-lg bg-pink-200" style={{height: value}}>
                    <span className="font-outfit text-secondary font-medium text-xl text-center mt-2 ml-2">{value}</span>
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
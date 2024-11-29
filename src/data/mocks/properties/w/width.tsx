import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function widthTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `100%`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{width: inheritValue}}>
                <div className="h-24 bg-pink-300 rounded-lg" style={{width: value}}>
                    <p className="font-outfit text-xl font-normal text-secondary text-center">{value}</p>
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
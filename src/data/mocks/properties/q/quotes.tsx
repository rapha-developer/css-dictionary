import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function quotesTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = "'«' '»'"
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full border-2 border-dotted border-red-400" style={{quotes: inheritValue}}>
                <p className="font-outfit text-xl text-secondary text-center w-full" style={{quotes: value}}>
                    <q className="">Isso é uma quote</q>
                </p>
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
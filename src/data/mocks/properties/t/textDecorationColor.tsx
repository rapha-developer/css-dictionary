import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function textDecorationColorTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `blueviolet`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{textDecorationColor: inheritValue}}>
                <p className="font-outfit text-2xl font-semibold text-body-100 w-full text-center underline" style={{textDecorationColor: value}}>
                    Decora-me
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
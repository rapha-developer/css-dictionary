import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function textDecorationPositionTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `under`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{textUnderlinePosition: inheritValue}}>
                <p className="font-outfit text-2xl font-semibold text-body-100 w-full text-center underline decoration-red-600" style={{textUnderlinePosition: value}}>
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
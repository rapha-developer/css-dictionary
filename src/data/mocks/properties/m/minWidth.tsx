import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function MinWidthTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `300px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="mx-auto w-full p-4 h-[200px] bg-pink-300 rounded-md" style={{minWidth: inheritValue}}>
                <div className="w-min h-full bg-pink-400 rounded-md" style={{minWidth: value}}>
                    <p className="pt-2 px-2 font-outfit text-secondary font-semibold text-sm">
                        min-width é {value}
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function rotateTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `0deg`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{rotate: inheritValue}}>
                <div className="mx-auto w-64 h-32 rounded-md bg-red-400 p-8 text-center font-outfit text-xl font-semibold text-body-200" 
                style={{rotate: value}}>
                    rotate: {value}
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
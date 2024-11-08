import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function rightTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `0px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-36 rounded-xl bg-red-400 relative" style={{right: inheritValue}}>
                <div className="absolute top-0 w-16 h-16 font-outfit text-sm text-white bg-primary rounded-xl text-center py-4" 
                    style={{right: value}}>
                        {value}
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
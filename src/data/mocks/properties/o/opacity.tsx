import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function opacityTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `0.8`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <div className="w-40 h-36 rounded-lg bg-green-300 p-4 mx-auto"
                    style={{opacity: inheritValue}}>
                    <div className="w-full h-full bg-purple-600 rounded-lg font-outfit text-white p-1"
                        style={{opacity: value}}>
                            opacity: {value}
                    </div>
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
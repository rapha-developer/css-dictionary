import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function paddingRightTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `10px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full bg-pink-200 rounded-md" style={{paddingRight: inheritValue}}>
                <div className="w-52 h-56 bg-red-400 border border-solid  rounded-md font-outfit text-lg text-secondary" 
                    style={{paddingRight: value}}>
                    <div className="w-full h-full bg-primary/80 rounded-lg font-outfit text-xl text-white font-semibold px-3">
                        {value}
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
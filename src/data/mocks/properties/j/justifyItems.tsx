import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function JustifyItemsTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `center`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{justifyItems: inheritValue}}>
            <div className="w-full h-full grid grid-cols-3" 
                style={{justifyItems: value}}>
                    <div className="h-24 rounded-sm bg-pink-300 font-outfit text-secondary text-xl font-semibold py-2 px-4 text-center">1</div>
                    <div className="h-24 rounded-sm bg-orange-300 font-outfit text-secondary text-xl font-semibold py-2 px-4 text-center">2</div>
                    <div className="h-24 rounded-sm bg-green-300 font-outfit text-secondary text-xl font-semibold py-2 px-4 text-center">3</div>
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
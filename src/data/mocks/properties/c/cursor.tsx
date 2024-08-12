import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function CursorTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `pointer`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{cursor: inheritValue}}>
            <button className="bg-secondary/90 rounded-md font-outfit text-white font-medium text-base py-4 px-5 mx-auto w-fit min-h-10" 
                style={{cursor: value}}>
                Coloque o mouse sobre o botão (hover me)
            </button>
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
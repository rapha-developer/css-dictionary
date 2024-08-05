import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function CaretColorTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `pink`
    return (
        <div className="flex flex-col gap-4 px-4 pt-6 w-full" style={{caretColor: inheritValue}}>
            <div className="w-full px-2 md:px-4">
                <input type="text" 
                    className="w-full h-8 rounded font-outfit text-body-100 font-bold border border-solid border-body-100 focus:outline-none indent-1"
                    placeholder="Escreve aqui..." 
                    style={{caretColor: value}} />
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
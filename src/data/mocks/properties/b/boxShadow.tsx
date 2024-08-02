import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"


export default function boxShadow({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `10px 10px 50px inset black`
    return (
        <div className="flex flex-col gap-4 py-4">
            <div className="py-4 px-2 w-96 mx-auto rounded-lg" style={{boxShadow: inheritValue}}>
                <p className="font-outfit text-sm text-secondary font-normal text-center h-24 w-24 rounded-lg"
                    style={{boxShadow: value}}>
                    Muda a sombra de um elemento
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
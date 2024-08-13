import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function DirectionTemplate({ name, value }: { name: string, value: 'ltr' | 'rtl' | 'initial' | 'inherit'}) {
    const inheritValue = `ltr`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{direction: inheritValue}}>
            <div className="w-full h-full" style={{direction: value}}>
                Mude a direção do texto clicando nos diferentes valores ao lado
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function unicodeBidiTemplate({ name, value }: { name: string, value: "normal" | "embed" | "bidi-override"}) {
    const inheritValue = `bidi-override`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{unicodeBidi: inheritValue}}>
            <div className="mx-auto px-4 py-2 bg-slate-100 font-outfit font-bold text-sm text-body-100 text-center rounded-lg">texto abaixo tem direction: rtl</div>
                <div className="w-full h-full p-6 font-outfit font-medium text-lg text-secondary text-center" style={{direction: 'rtl', unicodeBidi: value}}>
                    Sobrescreva (override) a direção do texto.
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
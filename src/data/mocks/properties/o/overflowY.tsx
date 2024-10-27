import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function overflowYTemplate({ name, value }: { name: string, value: "visible" | "hidden" | "scroll" | "auto"}) {
    const inheritValue = `visible`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
            <div className="w-full h-full" style={{overflowY: inheritValue}}>
                <div className="w-52 h-28 border-4 border-dotted border-purple-300 p-1 font-outfit text-base text-secondary mx-auto" 
                    style={{overflowY: value}}>
                    A propriedade overflow-y especifica se deve recortar o conteúdo, adicionar uma barra de rolagem ou exibir o conteúdo de overflow de um elemento de nível de bloco, quando ele transborda nas bordas superior e inferior.
                </div>
            </div>
            
        </div>
    )
}
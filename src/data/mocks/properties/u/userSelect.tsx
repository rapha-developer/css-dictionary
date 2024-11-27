import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function userSelectTemplate({ name, value }: {name: string, value: "auto" | "none" | "text" | "all"}) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full min-h-44 lg:min-h-40 bg-slate-200/80 rounded-md relative" style={{userSelect: inheritValue, WebkitUserSelect: inheritValue}}>
                <p className="font-outfit text-xl font-medium text-secondary bg-white rounded-md text-center px-2 py-3" style={{userSelect: value, WebkitUserSelect: value}}>O texto deste elemento DIV não pode ser selecionado. Se você clicar duas vezes em mim, meu texto não será destacado.</p>
                <p className="absolute bottom-3 left-0 w-full font-outfit text-secondary font-medium text-lg text-center">Clique 2x vezes com o mouse 🖱️ em cima do texto acima 👆</p>
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
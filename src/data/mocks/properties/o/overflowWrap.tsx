import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function overflowWrapTemplate({ name, value }: {name: string, value: "normal" | "break-word" | "anywhere" | "initial" | "inherit"}) {
    const inheritValue = `break-word`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{overflowWrap: inheritValue}}>
                <p className="font-outfit text-secondary text-base w-48 h-52 bg-green-300 rounded-lg px-2 py-3 mx-auto" 
                    style={{overflowWrap: value}}>
                    Essa div contém uma palavra muito longa: essaéumalongalongalongalongapalavra. Por padrão, a palavra longa não será quebrada e passará para a próxima linha.
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
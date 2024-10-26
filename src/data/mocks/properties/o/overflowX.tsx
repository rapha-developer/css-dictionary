import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function overflowXTemplate({ name, value }: { name: string, value: "visible" | "hidden" | "scroll" | "auto"}) {
    const inheritValue = `auto`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{overflowX: inheritValue}}>
                <div className="w-52 h-28 border-2 border-dotted border-purple-300 p-1 font-outfit text-base text-secondary mx-auto" style={{overflowX: value}}>
                    Essa div contém uma palavra muito longa: essaéumalongalongalongalongapalavra.
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function FontVariantCapsTemplate({ name, value }: {name: string, value: "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps"}) {
    const inheritValue = `small-caps`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{fontVariantCaps: inheritValue}}>
                <p className="font-sans font-normal text-secondary text-sm" style={{fontVariantCaps: value}}>         
                    texto com somente letra minúsculas.
                </p>
                <p className="font-sans font-normal text-secondary text-sm" style={{fontVariantCaps: value}}>    
                    TEXTO COM SOMENTE LETRAS MAIÚSCULAS     
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
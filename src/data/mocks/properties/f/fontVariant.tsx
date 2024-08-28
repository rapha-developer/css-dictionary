import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function FontVariantTemplate({ name, value }: {name: string, value: "normal" | "small-caps" | "initial" | "inherit"}) {
    const inheritValue = `small-caps`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{fontVariant: inheritValue}}>
                <p className="font-sans font-normal text-secondary text-sm" style={{fontVariant: value}}>         
                    texto com somente fonte normal ou fonte small-caps.
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
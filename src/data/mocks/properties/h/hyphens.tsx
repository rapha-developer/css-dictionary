import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function HyphensTemplate({ name, value }: {name: string, value: "none" | "manual" | "auto"}) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{hyphens: inheritValue}}>
            <div className="w-14 bg-pink-200 rounded-lg" style={{hyphens: value}}>
                    <span className="font-outfit text-secondary font-medium text-sm">A very&shy;very&shy;very long word.</span>
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
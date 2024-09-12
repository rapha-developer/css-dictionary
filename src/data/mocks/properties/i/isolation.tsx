import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function IsolationTemplate({ name, value }: { name: string, value: "auto" | "isolate" | "initial" | "inherit"}) {
    const inheritValue = `auto`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full " 
            style={{isolation: inheritValue}}>
            <div className="" style={{isolation: value}}>
                <div className="w-full h-full bg-pink-200 border-2 border-solid border-pink-300 p-4 rounded-md" 
                    style={{mixBlendMode: 'difference'}}>
                    isolation: {value}
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
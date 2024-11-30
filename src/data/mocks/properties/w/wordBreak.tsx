import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function wordBreakTemplate({ name, value }: { name: string, value: "normal" | "keep-all" | "break-word" |"break-all"}) {
    const inheritValue = `break-word`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{wordBreak: inheritValue}}>
                <p className="font-outfit text-base text-secondary w-[195px] py-1 bg-pink-300/80 rounded-lg" style={{wordBreak: value}}>
                    Esta é uma palavra bemmuitomuitomuitomuitolonga. <br /><br />
                    Aqui-temos-muitos-hífens.
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
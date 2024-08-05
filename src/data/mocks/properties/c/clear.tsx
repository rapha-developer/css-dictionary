import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function ClearTemplate({ name, value }: {name: string, value: "left" | "right" | "both" | "none"}) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 w-full" style={{clear: inheritValue}}>
            <div className="">
                <img src="/loading.gif" alt="Loading gif" className="w-12 h-12 float-left" />
                <p className="font-outfit font-normal text-base text-secondary" style={{clear: value}}>
                    Este paragrafo possui um alinhamento flutuante como {value}
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
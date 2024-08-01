import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";

export default function BoxDecorationBreakTemplate({ name, value }: {name: string, value: "slice" | "clone" | "initial" | "inherit"}) {
    const inheritValue = `clone`
    return (
        <div className="flex flex-col gap-4 py-4">
            <div className="mx-auto max-w-32 h-auto" style={{boxDecorationBreak: inheritValue, WebkitBoxDecorationBreak: inheritValue}}>
            <span className="bg-icon-widget-pink font-outfit text-sm text-secondary font-normal text-center px-1 py-2 border-8 border-solid border-red-700 rounded-3xl leading-loose"
                style={{boxDecorationBreak: value, WebkitBoxDecorationBreak: value}}>Controla as bordas, background e entre outros elementos</span>
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
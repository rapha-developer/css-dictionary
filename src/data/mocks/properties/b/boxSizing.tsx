import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";

export default function BoxSizing({ name, value }: {name: string, value: "content-box" | "border-box" | "initial" | "inherit"}) {
    const inheritValue = `border-box`
    return (
        <div className="flex flex-col gap-4 py-4" style={{boxSizing: inheritValue}}>
            <div className="mx-auto w-64 border-[16px] bg-pink-300 border-solid border-borderLine px-4 py-6" style={{boxSizing: value}}>
                Define como será calculado a largura e a altura de um elemento
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
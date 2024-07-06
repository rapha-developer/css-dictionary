import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";

export default function BackFaceVisibilityTemplate({ name, value}: {name: string, value: "visible" | "hidden" | "initial" | "inherit"}) {
    const inheritValue = `hidden`
    return (
        <div className="w-full h-full py-8 flex flex-col gap-3 items-center justify-center" style={{backfaceVisibility: inheritValue, WebkitBackdropFilter: inheritValue}}>
                <p className="font-outfit text-base font-semibold text-secondary">A div foi rotacionada em 180 degraus</p>
            <div className="mx-auto w-32 h-32 rounded-md bg-borderLine text-center mb-3" style={{transform: 'rotateY(180deg)', backfaceVisibility: value, WebkitBackdropFilter: value}}>
                123456
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
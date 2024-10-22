import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function objectFitTemplate({ name, value }: {name: string, value: "none" | "fill" | "contain" | "cover" | "scale-down"}) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{objectFit: inheritValue}}>
                <img src="https://www.w3schools.com/cssref/pineapple.jpg" 
                    alt="pineapple in the forest (abacaxi na floresta)" 
                    style={{objectFit: value}}
                    className="w-36 h-80 rounded-3xl" />
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
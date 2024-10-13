import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

type mixBlondeModeType = {
    name: string
    value: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "difference" | "exclusion" | "hue" | "saturation" | "color"
}
export default function NTemplate({ name, value }: mixBlondeModeType) {
    const inheritValue = `multiply`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full bg-pink-300 rounded-md py-5 px-3"
                style={{mixBlendMode: inheritValue}}>
                <img src="https://www.w3schools.com/cssref/pineapple.jpg" 
                    alt="pineapple in the forest (abacaxi em uma floresta)" 
                    style={{mixBlendMode: value}}
                    className="w-64 h-64 rounded-md" />
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
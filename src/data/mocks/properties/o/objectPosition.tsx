import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function objectPositionTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `80% 30%`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{objectPosition: inheritValue}}>
                <img src="https://www.w3schools.com/cssref/pineapple.jpg" 
                    alt="pineapple in the forest (abacaxi na floresta)" 
                    style={{objectPosition: value}}
                    className="w-36 h-80 rounded-3xl object-none" />
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
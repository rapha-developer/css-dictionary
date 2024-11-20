import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function textOrientationTemplate({ name, value }: {name: string, value: "mixed" | "upright"}) {
    const inheritValue = `upright`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{textOrientation: inheritValue}}>
            <div className="w-full h-full" style={{writingMode: 'vertical-lr', textOrientation: value}}>
                <h3 className="font-outfit text-2xl font-medium text-body-100">Oriente os caracteres!</h3>
                <p className="font-outfit text-base font-normal text-secondary">Esse exemplo demonstra diferentes valores para text-orientation. <br />
                Have fun!</p>
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
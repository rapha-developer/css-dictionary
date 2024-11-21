import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function textTransformTemplate({ name, value }: {name: string, value: 'capitalize' | 'uppercase' | 'lowercase'}) {
    const inheritValue = `capitalize`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{textTransform: inheritValue}}>
            <p className="font-outfit font-medium text-xl text-secondary text-center" style={{textTransform: value}}>Esse texto tem {value} como parametro</p>
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
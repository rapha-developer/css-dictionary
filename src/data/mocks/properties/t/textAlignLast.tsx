import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function textAlignLastTemplate({ name, value }: {name: string, value: 'auto' | 'left' | 'center' | 'right' | 'start' | 'end'}) {
    const inheritValue = `center`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{textAlignLast: inheritValue}}>
                <p className="font-outfit text-xl font-medium text-body-100" style={{textAlignLast: value}}>
                Esta propriedade é destinada a textos mais longos e especifica o que fazer com o alinhamento da última linha em um texto mais longo.
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
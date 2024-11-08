import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function resizeTemplate({ name, value }: { name: string, value: 'both' | 'none' | 'vertical' | 'horizontal'}) {
    const inheritValue = `both`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{resize: inheritValue}}>
                <div className="mx-auto w-56 h-32 rounded-md border-2 border-dotted border-red-400 p-4 overflow-auto" 
                    style={{resize: value}}>
                    <p className="font-outfit text-sm text-semibold text-secondary">
                        Deixe o usuário redimensionar tanto a altura quanto a largura deste elemento div.<br /><br />
                        Para redimensionar: Clique e arraste o canto inferior direito deste elemento div.
                    </p>
                </div>
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
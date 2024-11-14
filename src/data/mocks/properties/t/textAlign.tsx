import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function textAlignTemplate({ name, value }: {name: string, value: "left" | "right" | "center" | "justify"}) {
    const inheritValue = `center`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{textAlign: inheritValue}}>
            <div className="w-full h-full" style={{textAlign: value}}>
                <h2 className="font-outfit font-normal text-3xl text-secondary mb-3">Alinhe-me!</h2>
                Este exemplo demonstra diferentes valores de alinhamento de texto.<br />Clique nos exemplos ao lado!

                <p className="font-outfit font-normal text-base text-secondary mt-3">Para textos mais longos, observe que text-align: justify alinha cada linha para que elas tenham exatamente a mesma largura:</p>
                <p className="font-outfit font-normal text-base text-secondary mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
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
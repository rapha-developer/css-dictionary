import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"

export default function writingModeTemplate({ name, value }: { name: string, value: "horizontal-tb" | "vertical-rl" | "vertical-lr"}) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{writingMode: value}}>
                <p className="w-full font-outfit font-medium text-xl text-secondary border-2 border-dotted border-green-400">Veja o que você pode fazer com a propriedade writing-mode!</p>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
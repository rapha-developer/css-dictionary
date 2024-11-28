import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"

export default function visibilityTemplate({ name, value }: { name: string, value: "visible" | "hidden"}) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <p className="font-outfit text-base font-normal text-secondary text-center">
                Neste parágrafo, o <span className="bg-cyan-200 px-2 rounded-lg" style={{visibility: value}}>elemento em azul</span> pode ter o valor de sua visibilidade alterado
                </p>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
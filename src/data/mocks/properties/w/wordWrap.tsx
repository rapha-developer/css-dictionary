import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"

export default function wordWrapTemplate({ name, value }: { name: string, value: "normal" | "break-word"}) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <p className="font-outfit text-base font-medium text-secondary w-[195px] py-1 bg-pink-300/80 rounded-lg" style={{wordWrap: value}}>
                    Esta é uma palavra bemmuitomuitomuitomuitolonga. <br /><br />
                    Aqui-temos-muitos-hífens.
                </p>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
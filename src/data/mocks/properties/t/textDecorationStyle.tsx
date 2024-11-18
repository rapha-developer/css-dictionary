import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"

export default function textDecorationStyleTemplate({ name, value }: { name: string, value: "solid" | "double" | "dotted" | "dashed" | "wavy"}) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <p className="font-outfit text-2xl font-semibold text-body-100 w-full text-center underline decoration-red-600" style={{textDecorationStyle: value}}>
                    Decora-me
                </p>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
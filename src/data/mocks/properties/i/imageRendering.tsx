import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"

export default function ImageRenderingTemplate({ name, value }: {name: string, value: "auto" | "crisp-edges" | "pixelated" }) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <img src="https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png" 
                    alt="lagartixa verde (green lucertola)"
                    style={{imageRendering: value}} 
                    className="w-full h-full object-cover"
                    />
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
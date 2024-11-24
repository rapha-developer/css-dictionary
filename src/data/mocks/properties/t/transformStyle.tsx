import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"

export default function transformStyleTemplate({ name, value }: {name: string, value: 'flat' | 'preserve-3d'}) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
            <div className="w-full h-40 relative">
                <div className="p-8 mx-auto bg-pink-300 rounded-md absolute top-0 left-1/3 font-outfit text-base text-secondary"
                style={{transform: 'rotateY(60deg)', transformStyle: value}}>
                    Primeira div!
                    <div className="absolute bg-yellow-300 p-8" 
                        style={{transform: 'rotateY(-60deg)'}}>Segunda DIV:</div>
                </div>
            </div>
        </div>
    )
}
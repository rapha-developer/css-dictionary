import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function pointerEventsTemplate({ name, value }: {name: string, value: 'auto' | 'none'}) {
    const inheritValue = `auto`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{pointerEvents: inheritValue}}>
                <div className="w-56 h-full border border-dotted border-red-400 mx-auto py-4 px-14">
                    <a href="https://css-dictonary.netlify.app/"
                        target="_blank"
                        style={{pointerEvents: value}}
                        className={(value === 'auto') ? `font-outfit text-lg font-semibold text-secondary underline` : `font-outfit text-lg font-semibold text-secondary`}>
                        Clique aqui!
                    </a>
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
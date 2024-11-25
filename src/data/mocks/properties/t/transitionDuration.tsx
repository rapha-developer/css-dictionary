import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function transitionDurationTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `250ms`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full min-h-44 lg:min-h-40 bg-slate-200/80 rounded-md relative" style={{transitionDuration: inheritValue}}>
                <div className="w-24 h-24 bg-red-400 rounded-md absolute top-2 left-2 hover:left-20 cursor-pointer transition-all" 
                    style={{transitionDuration: value}}></div>
                <p className="absolute bottom-3 left-0 w-full font-outfit text-secondary font-medium text-lg text-center">Coloque o mouse 🖱️ em cima do quadrado vermelho acima 👆</p>
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
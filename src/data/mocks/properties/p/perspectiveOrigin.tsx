import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function perspectiveOriginTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <InheritTemplate 
                    inheritValue={inheritValue}
                    property={{name: name, value: value}}
                />
                <CopyAndPasteTemplate 
                    name={name}
                    value={value}
                />
                <div className="mt-10 mx-auto w-64 h-64 bg-green-200 rounded-md relative" 
                    style={{perspective: '700px', perspectiveOrigin: value}}>
                        <p className="font-outfit text-xl text-secondary p-4">origin: {value}</p>
                        <div className="absolute p-10 bg-red-300 border border-solid border-red-700
                            font-outfit text-xl text-white" 
                            style={{transform: 'rotateX(45deg)'}}>
                                Pense que você está olhando para uma parede de um prédio.
                                Veja o que acontece com a perspectiva quando você gradualmente se aproxima do prédio.
                        </div>
                    </div>
            </div>
        </div>
    )
}
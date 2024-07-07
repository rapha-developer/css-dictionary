import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundAttachmentTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `local`
    const arrayDeFrases = new Array(100).fill("Tente usar o scroll para ver a propriedade");
    return (
        <div className="flex flex-col gap-4 w-full mx-auto max-w-96">
            <div className="w-full h-96 overflow-y-scroll">
                <div 
                    className="w-full mx-auto h-auto"
                    style={{background: "50% 5% / contain url('https://www.w3schools.com/cssref/img_tree.gif')", 
                        backgroundRepeat:"no-repeat",
                        backgroundAttachment: value}} 
                >
                {arrayDeFrases.map((frase, key) => (
                    <div className="my-2" key={`${frase}-${key}`}>
                        <p className="font-outfit text-sm font-medium text-secondary">{frase}</p>
                    </div>
                ))}
                </div>
            </div>
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
        </div>
    )
}

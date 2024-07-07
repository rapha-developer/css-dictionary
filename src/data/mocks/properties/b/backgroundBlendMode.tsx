import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundBlendModeTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `overlay`
    return (
        <div className="flex flex-col gap-4 w-full mx-auto max-w-96" style={{backgroundBlendMode: inheritValue}}>
            <div 
                className="w-96 mx-auto h-96"
                style={{background: "url('https://www.w3schools.com/cssref/img_tree.gif') no-repeat, url('https://www.w3schools.com/cssref/paper.gif') repeat", 
                    backgroundBlendMode: value}} 
            >
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

import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundImageTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `conic-gradient(red, gray, #fefefe, white, black)`
    return (
        <div className="w-full h-full flex flex-col gap-4 py-4 px-2 md:px-4" style={{backgroundImage: inheritValue}}>
            <div className="w-full min-h-32 h-full max-h-96 rounded-md border-2 border-dashed border-primary" 
            style={{backgroundImage: value, backgroundSize: 'cover'}}>
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
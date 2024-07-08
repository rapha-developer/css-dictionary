import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundColorTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `white`
    return (
        <div className="w-full h-full flex flex-col gap-4 py-4 px-2 md:px-4" style={{backgroundColor: inheritValue}}>
            <div className="w-full min-h-32 h-full rounded-md border-2 border-dashed border-primary" style={{backgroundColor: value}}>
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
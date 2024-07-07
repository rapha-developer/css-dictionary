import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `aliceblue`
    return (
        <div className="w-full h-full flex flex-col gap-4 py-6 px-2 md:px-4">
            <div className="flex items-center border-2 border-solid border-primary rounded-md" 
                style={{background: inheritValue}}>
                <div className="mx-auto w-full min-h-96 h-auto" 
                    style={{background: value}}></div>
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
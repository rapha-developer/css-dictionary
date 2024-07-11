import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BorderTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `2px dotted pink`
    return (
        <div className="flex flex-col gap-4 py-4" style={{border: inheritValue}}>
            <div className="w-3/4 h-60 rounded-md mx-auto"
            style={{border: value}}></div>
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
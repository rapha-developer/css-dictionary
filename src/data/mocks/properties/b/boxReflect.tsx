import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function boxReflect({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 py-4">
            <div className="mx-auto max-w-32 h-auto mb-10" style={{WebkitBoxReflect: inheritValue}}>
            <img className="w-16 h-16"
                src="/loading.gif"
                style={{WebkitBoxReflect: value}} />
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
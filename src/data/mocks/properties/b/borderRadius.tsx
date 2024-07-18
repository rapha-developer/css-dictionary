import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BorderRadiusTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `10% 30% 10% 50%`
    return (
        <div className="flex flex-col gap-4 items-center" style={{borderRadius: inheritValue}}>
            <div className=" w-40 h-40 bg-primary p-4" style={{borderRadius: value}}></div>
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
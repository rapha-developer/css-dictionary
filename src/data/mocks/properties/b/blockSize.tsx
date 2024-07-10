import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BlockSizeTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `200px`
    return (
        <div className="w-full h-auto flex flex-col gap-4">
            <div className="h-auto" style={{blockSize: inheritValue}}>
            <div className="w-full bg-borderLine py-4 px-2 rounded-sm" style={{blockSize: value}}>
                <p className="font-outfit text-sm text-secondary font-medium capitalize">
                    Essa div possui diferentes tamanhos conforme {name}</p>
            </div>
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
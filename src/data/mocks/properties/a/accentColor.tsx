import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function AccentColorTemplate ({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="w-full h-auto flex items-center justify-center" style={{accentColor: 'yellow'}}>
            <div className="w-1/2 mx-auto flex flex-col gap-3">
                <input type="range" id="range" className="bg-yellow-200 text-red-500" style={{accentColor: value}} /> 
                <InheritTemplate 
                    inheritValue={'yellow'}
                    property={{name: name, value: value}}
                />
                <CopyAndPasteTemplate 
                    name={name}
                    value={value}
                />
            </div>
        </div>
    )
}
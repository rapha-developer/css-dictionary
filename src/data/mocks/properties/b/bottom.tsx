import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BottomTemplate({ name, value }: PropertyTemplateProps['property']) {
    const bottomTypeClass = (value.includes('%')) ? 'absolute left-0' : 'relative'
    const fatherAbsoluteClass = (value.includes('%')) ? 'h-[250px] relative' : ''
    const inheritValue = `-150px`
    return (
        <div className={`flex flex-col gap-4 py-4 ${fatherAbsoluteClass} bg-[#B6F7F4] `} style={{bottom: inheritValue}}>
            <div className={`w-3/4 h-20 py-2rounded-md mx-auto flex items-center justify-center ${bottomTypeClass} border border-solid border-primary`}
            style={{bottom: value}}>
                <p className="font-outfit text-sm text-secondary font-normal text-center">Muda a posição vertical do elemento</p>
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
import { useState } from "react";
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BorderInlineTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `2px dotted pink`
    const [writingModeState, setWritingModeState] = useState(false)
    function changeWritingMode() {
        setWritingModeState((prev) => !prev)
    }
    const writeClass = (writingModeState) ? 'vertical-lr' : 'horizontal-tb'
    return (
        <div className="flex flex-col gap-4 py-4" style={{borderInline: inheritValue}}>
            <div className="w-3/4 h-60 rounded-md mx-auto flex items-center justify-center"
            style={{borderInline: value, writingMode: writeClass}}>
                <p className="font-outfit text-sm text-secondary font-normal text-center">writing-mode: {writeClass}</p>
            </div>
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
            <button className={`${writeClass} bg-primary text-sm font-medium font-outfit text-white rounded-md py-4 px-6 active:shadow-[inset_10px_10px_20px_-6px_rgba(0,0,0,0.7)]`}
            onClick={changeWritingMode}>
                Clique para mudar o writing-mode
            </button>
        </div>
    )
}
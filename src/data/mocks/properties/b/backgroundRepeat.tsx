import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundRepeatTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `space`
    return (
        <div className="w-full h-full flex flex-col gap-4 py-6 px-2 md:px-4 justify-center">
            <div className="w-full h-60 rounded-md bg-borderLine p-2 md:p-6" style={{backgroundRepeat: inheritValue}}>
                <div className="w-full h-full"
            style={{
                backgroundPosition: "0% 0%",
                backgroundRepeat: value,
                backgroundImage: 'url("https://interactive-examples.mdn.mozilla.net/media/examples/star.png")'}}></div>
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
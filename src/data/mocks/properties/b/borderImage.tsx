import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function BorderCollapseTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `5% fill stretch`
    return (
        <div className="flex flex-col gap-4" style={{borderImage: inheritValue}}>
            <div className="p-4 border-8 border-solid border-transparent" style={{
                borderImage: value, 
                borderImageSource: "url('https://www.w3schools.com/cssref/border.png')"}}>
                <p className="font-outfit text-base text-secondary text-center">As bordas mudam conforme os valores</p>
            </div>
            <InheritTemplate 
                inheritValue={`url('borders.png') ${inheritValue}`}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={(value === 'inherit') ? value : `url('borders.png') ${value}`}
            />
        </div>
    )
}
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function ListStyleImageTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `url('https://www.w3schools.com/cssref/sqpurple.gif')`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full px-2 md:px-4 py-3" style={{listStyleImage: inheritValue}}>
                <ul className="px-2 py-3" style={{listStyle: 'disc inside', listStyleImage: value}}>
                    <li className="font-outfit text-secondary text-xl font-semibold">item um</li>
                    <li className="font-outfit text-secondary text-xl font-semibold">item dois</li>
                    <li className="font-outfit text-secondary text-xl font-semibold">item três</li>
                </ul>
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
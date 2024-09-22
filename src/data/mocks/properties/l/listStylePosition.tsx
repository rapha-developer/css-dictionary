import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function ListStylePositionTemplate({ name, value }: {name: string, value: "inside" | "outside" | "initial" | "inherit"}) {
    const inheritValue = `inside`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full px-2 md:px-4 py-3" style={{listStylePosition: inheritValue}}>
                <ul className="px-2 py-3 bg-pink-200 rounded-md" style={{listStyle: 'circle', listStylePosition: value}}>
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
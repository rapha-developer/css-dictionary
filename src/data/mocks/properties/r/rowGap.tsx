import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function rowGapTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `25px`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{rowGap: inheritValue}}>
                <div className="bg-pink-400 w-full h-64 rounded-md grid p-4 gap-2" 
                    style={{rowGap: value, gridTemplateColumns: 'auto auto auto auto'}}>
                    <div className="bg-pink-300 rounded-md py-5 text-center font-outfit text-xl text-secondary font-medium">1</div>
                    <div className="bg-pink-300 rounded-md py-5 text-center font-outfit text-xl text-secondary font-medium">2</div>
                    <div className="bg-pink-300 rounded-md py-5 text-center font-outfit text-xl text-secondary font-medium">3</div>
                    <div className="bg-pink-300 rounded-md py-5 text-center font-outfit text-xl text-secondary font-medium">4</div>
                    <div className="bg-pink-300 rounded-md py-5 text-center font-outfit text-xl text-secondary font-medium">5</div>
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
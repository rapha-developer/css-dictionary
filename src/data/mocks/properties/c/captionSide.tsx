import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function CaptionSideTemplate({ name, value }: {name: string, value: 'bottom' | 'top' | 'initial' | 'inherit'}) {
    const inheritValue = `bottom`
    return (
        <div className="flex flex-col gap-4 px-4 pt-6 w-full" style={{captionSide: inheritValue}}>
            <table className="border border-solid border-gray-300 space-y-3" style={{captionSide: value}}>
                <tbody>
                    {[0,1,2,3].map((item) => (
                        <tr key={`tr-item-${item}`}>
                            {[0,1,2,3].map((item) => (
                                <td key={`td-item-${item}`} className="border border-solid border-purple-400">Table cell</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <caption>Caption texto</caption>
            </table>
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
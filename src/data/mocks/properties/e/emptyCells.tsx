import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function EmptyCellsTemplate({ name, value }: { name: string, value: "show" | "hide" | "initial" | "inherit"}) {
    const inheritValue = `hide`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{emptyCells: inheritValue}}>
            <table id="table1" 
                cellPadding={3} 
                style={{emptyCells: value, 
                borderCollapse: "separate",
                borderSpacing: '10px', 
                border: '1px double mediumpurple'}}>
                <tbody>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                <tr className="px-2">
                    <td style={{ border: '1px double mediumpurple'}}>Salsicha</td>
                    <td style={{ border: '1px double mediumpurple'}}></td>
                </tr>
                <tr className="px-2">
                    <td style={{ border: '1px double mediumpurple'}}>Scooby</td>
                    <td style={{ border: '1px double mediumpurple'}}>Doo</td>
                </tr>
                </tbody>
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
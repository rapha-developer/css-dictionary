import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function BorderCollapseTemplate({ name, value }: { name: string, value: "separate" | "collapse"}) {
    const inheritValue = `collapse`
    return (
        <div className="flex flex-col gap-4">
            <div className="" style={{borderCollapse: inheritValue}}>
                <table id="table1" style={{borderCollapse: value, border: "1px solid black"}}>
                    <tr>
                        <th style={{border: "1px solid black"}}>Firstname</th>
                        <th style={{border: "1px solid black"}}>Lastname</th>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Peter</td>
                        <td style={{border: "1px solid black"}}>Griffin</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Lois</td>
                        <td style={{border: "1px solid black"}}>Griffin</td>
                    </tr>
                </table>
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
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function BorderSpacingTemplate({ name, value }: { name: string, value: "separate" | "collapse"}) {
    const inheritValue = `6px 40px`
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="" style={{borderSpacing: inheritValue}}>
                <table id="tableSpacing" 
                cellPadding={'3'}
                style={{borderSpacing: value, borderCollapse: 'initial', border: "2px solid green"}}>
                    <tbody>
                        <tr>
                            <td style={{border: "1px solid black"}}>Firstname</td>
                            <td style={{border: "1px solid black"}}>Lastname</td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black"}}>Peter</td>
                            <td style={{border: "1px solid black"}}>Griffin</td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black"}}>Lois</td>
                            <td style={{border: "1px solid black"}}>Griffin</td>
                        </tr>
                    </tbody>
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
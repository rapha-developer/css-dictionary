import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function tableLayoutTemplate({ name, value }: {name: string, value: "auto" | "fixed"}) {
    const inheritValue = `fixed`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{tableLayout: inheritValue}}>
            <table id="myTable"
                className="w-full  border-separate"
                border={3}
                cellPadding="3" 
                style={{tableLayout: value}}>
                <tbody>
                    <tr>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
                        <td className="border-2 border-red-300">A table cell</td>
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
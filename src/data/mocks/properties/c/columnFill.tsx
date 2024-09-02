import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function ColumnFillTemplate({ name, value }: {name: string, value: 'balance' | 'auto' | 'initial' | 'inherit'}) {
    const inheritValue = `auto`
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full" style={{columnFill: inheritValue}}>
            <div className="font-outfit text-secondary font-normal text-base h-96 sm:h-80 md:h-72 lg:h-56" style={{columnCount: 2, columnFill: value}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi
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
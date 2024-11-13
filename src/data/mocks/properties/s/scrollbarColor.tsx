import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function scrollbarColorTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <div className="w-64 h-32 mx-auto overflow-y-scroll" style={{scrollbarColor: value}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...
                </div>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function colorSchemeTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <p className="font-outfit text-secondary font-normal text-center">
                {name} é uma propriedade que deve ser usada dentro do :root {`{}`} no css
                <pre className="mt-8 bg-secondary/95 text-white rounded-xl h-12 py-3 px-2 md:px-4">
                    <code className="">
    {`:root { color-scheme: ${value} }`}
                    </code>
                </pre>
            </p>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
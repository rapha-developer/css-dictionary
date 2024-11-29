import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function windowsTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
                <p className="font-outfit font-semibold text-base font-secondary">Infelizmente não temos exemplos aqui nessa página, mas você pode clicar: <a href="https://www.w3schools.com/cssref/css3_pr_widows.php" target="_blank" 
                className="text-underline bg-yellow-200 px-2">Clique aqui!</a> para ir para uma página externa com exemplos.</p>
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"
// import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function scrollBehaviorTemplate({ name, value }: {name: string, value: "auto" | "smooth"}) {
    const inheritValue = `auto`
    
    function handleScroll() {
        window.scrollTo({top: 0, behavior: value})
        console.log('handle scroll')
    }
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full flex flex-col items-center">
                <button onClick={handleScroll} className="px-6 py-4 rounded-md bg-primary font-outfit font-medium text-white text-center">Up ⬆</button>
                <p className="font-outfit font-semibold text-secondary text-center mt-4">comportamento: {value}</p>
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
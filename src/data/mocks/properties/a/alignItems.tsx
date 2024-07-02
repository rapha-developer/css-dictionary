import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function AlignItemsTemplate({ name, value }: PropertyTemplateProps['property']) {
    return (
        <div className="w-full h-auto">
            <div className="bg-dark mx-auto w-3/4 h-64 py-4 px-2 rounded-md overflow-hidden relative">
                <img src="/dark-grid.PNG" 
                    alt="Dark grid" 
                    className="absolute top-0 left-0 object-cover z-10 w-full h-full"
                />
                <div className="absolute top-0 left-0 z-20 w-full h-full py-3 items-center">
                    <div className="w-full py-2 px-2 grid grid-cols-3 gap-4 h-60"
                        style={{alignItems: value}}>
                        {[1,2,3,4].map((item) => (
                            <div className="w-12 h-12 background-hero rounded-md" key={`item-${item}`}>
                                <span className="font-outfit text-2xl font-bold py-1 px-3 text-body-200 flex items-center">0{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <InheritTemplate 
                inheritValue={'center'}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}

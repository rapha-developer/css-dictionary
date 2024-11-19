import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps"

export default function textEmphasisPositionTemplate({ name, value }: PropertyTemplateProps['property']) {
    const writingMode = (value.includes('left') || value.includes('right')) ? 'vertical' : 'horizontal'
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full">
            {(writingMode === "horizontal") && 
                <p className="font-outfit text-5xl font-semibold text-body-100 w-full text-center" 
                style={{textEmphasisStyle: 'triangle', 
                        textEmphasisColor: 'blue',
                        WebkitTextEmphasisPosition: value}}>
                    Dê enfase em mim
            </p>
            }
            {(writingMode === "vertical") && 
                <p className="font-outfit text-5xl font-semibold text-body-100 w-full text-center" 
                style={{textEmphasisStyle: 'triangle', 
                        textEmphasisColor: 'blue',
                        writingMode: 'vertical-lr',
                        WebkitTextEmphasisPosition: value}}>
                    Dê enfase em mim
            </p>
            }
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}
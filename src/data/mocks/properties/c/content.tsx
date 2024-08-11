import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";
import { contentData } from './data/content'
export default function ContentTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `none`
    const examplesCodeOptions: string[] = contentData.examples.map((example) => example.code)
    const paragraphValue = `Este é o paragrafo com valor de ${value}`
    return (
        <div className={`flex flex-col gap-4 px-4 py-6 w-full`}>
            <div className={`flex flex-col gap-4`}>
                {examplesCodeOptions[0] === value &&
                    <p className={`font-outfit text-base font-semibold before:content-[normal] text-center`}>
                        {paragraphValue}
                    </p>
                }
                {examplesCodeOptions[1] === value &&
                    <p content="Hello World" 
                        className={`font-outfit text-base font-semibold before:content-[none] text-center`}>
                        {paragraphValue}
                    </p>
                }
                {examplesCodeOptions[2] === value &&
                    <p style={{counterIncrement: 'my-counter'}} 
                        className={`font-outfit text-base font-semibold before:content-[counter(my-counter)] text-center`}>
                        &nbsp;{paragraphValue}
                    </p>
                }
                {examplesCodeOptions[3] === value &&
                    <p content="Hello World: " 
                        className={`font-outfit text-base font-semibold before:content-[attr(content)] text-center`}>
                        {paragraphValue}
                    </p>
                }
                {examplesCodeOptions[4] === value &&
                    <p className={`font-outfit text-base font-semibold before:content-['Texto'] text-center`}>
                        &nbsp;&nbsp;{paragraphValue}
                    </p>
                }
                {examplesCodeOptions[5] === value &&
                    <p className={`font-outfit text-base font-semibold before:content-[open-quote] text-center`}>
                        {paragraphValue}
                    </p>
                }
                {examplesCodeOptions[6] === value &&
                    <p className={`font-outfit text-base font-semibold before:content-[open-quote] after:content-[close-quote] text-center`}>
                        {paragraphValue}
                    </p>
                }
                {examplesCodeOptions[7] === value &&
                    <p className={`font-outfit text-base font-semibold before:content-[url("/react.svg")] text-center`}>
                        &nbsp;{paragraphValue}
                    </p>
                }
                {examplesCodeOptions[8] === value &&
                    <p className={`font-outfit text-base font-semibold before:content-[initial] text-center`}>
                        &nbsp;{paragraphValue}
                    </p>
                }
                {examplesCodeOptions[9] === value &&
                    <p className={`font-outfit text-base font-semibold before:content-[inherit] text-center`}>
                        &nbsp;{paragraphValue}
                    </p>
                }
                <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
                <CopyAndPasteTemplate 
                    name={name}
                    value={value}
                />
            </div>
        </div>
    )
}
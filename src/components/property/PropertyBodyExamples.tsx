import { PropertyProps } from "../../types/PropertyProps"

export const PropertyBodyExamples = ({ name, examples }: { name: string, examples: PropertyProps['examples']}) => {
    return (
        <div className="flex flex-wrap justify-evenly">    
            {Array.isArray(examples) && 
            examples.length > 0 &&
            examples.map((example) => (
                <div className="flex flex-col gap-4 py-8 min-w-72" key={example?.id}>
                    <span className="font-outfit text-xl font-semibold text-secondary block">{`${name.toLocaleLowerCase()}: ${example.name}`}</span>
                    <div className="w-full py-6 px-4 bg-borderLine rounded-lg">
                        <div
                            dangerouslySetInnerHTML={{__html: example.code}}
                        />
                    </div>
                </div>
            ))
            }
        </div>
    )
}
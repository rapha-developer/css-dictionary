import { Suspense, lazy,  useState } from "react"
import { PropertyProps } from "../../types/PropertyProps"

export const PropertyBodyExamples = ({ name, examples }: { name: string, examples: PropertyProps['examples']}) => {
    
    const [values, setValues] = useState(generateValuesItemFromExamples(examples))
    function handleChange(name: string) {
        setValues((prevValues) => prevValues.map((prevItem) => {
            return prevItem.name === name ?
            {...prevItem, isActive: true } :
            {...prevItem, isActive: false }
        }))
    }  
    const lazyParams = generateParamsForLazyRoute(name)
    const PropertyPreview = lazy(() => import(`../../data/mocks/properties/${lazyParams.directory}/${lazyParams.name}.tsx`))
    return (
        <div className="w-full h-auto">
            <div className="flex flex-col md:flex-row h-auto">
                <ul className="flex flex-row flex-wrap justify-center md:justify-normal md:flex-col gap-4 bg-white border border-borderLine p-4">
                    {Array.isArray(values) &&
                    values.length > 0 &&
                    values.map((value) => (
                        <li className="flex-item font-outfit text-sm text-secondary py-4 px-5 bg-borderLine rounded-md text-center flex items-center justify-center gap-2"
                            key={value.id}>
                            <input type="checkbox" 
                                id={value.name} 
                                className="cursor-pointer"
                                style={{borderRadius: '100%'}}
                                name={value.name} 
                                checked={value.isActive} 
                                onChange={() => handleChange(value.name)}
                                />
                            <label htmlFor={value.name}>{value.name}</label>
                        </li>
                    ))
                    }
                </ul>
                <div className="w-full flex items-center justify-center border border-borderLine py-4 md:py-0">
                    <Suspense fallback={`/loading.gif`}>
                        <PropertyPreview property={(values.find((value) => value.isActive === true ))?.code} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
function generateParamsForLazyRoute(name: string) {
    return {
        directory: name.charAt(0),
        name: name.split(' ').reduce((Acc, current) => Acc + current.charAt(0).toLocaleUpperCase() + current.substring(1))
    }
}
function generateValuesItemFromExamples(examples: PropertyProps['examples']) {
    return examples.map((example, key) => {
        return {
            id: example.id,
            name: example.name,
            code: example.code,
            isActive: (key === 0 ) ? true : false
        }
    })
}
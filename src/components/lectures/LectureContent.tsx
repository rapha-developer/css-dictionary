import { PropertyExample, PropertyValue } from "../../propertyData/PropertyInterfaces"
import { LectureExamples } from "./LectureExamples"
import { LectureValues } from "./LectureValues"

type LectureContentProps = {
    name: string,
    definition: string,
    values: PropertyValue[]
    examples: PropertyExample[]
}
export const LectureContent = ({ name, definition, values, examples }: LectureContentProps) => {
    const titles = {
        name: `Propriedade ${name}`,
        values: `Values`,
        examples:`Examples`
    }
    return (
        <div className="flex flex-col gap-6 w-11/12 md:w-10/12 lg:max-w-3xl xl:max-w-4xl items-center justify-center mx-auto">
            <h2 className="font-outfit text-3xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                {titles.name}
            </h2>
            <p className="font-outfit text-base font-normal leading-8 text-body-100 text-center mb-10">
                {definition}
            </p>
            <h3 className="font-outfit text-2xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                {titles.values}
            </h3>
            <LectureValues values={values} />
            <div className="w-full">
                <h3 className="font-outfit text-2xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                    {titles.examples}
                </h3>
                <LectureExamples 
                    name={name} 
                    examples={examples}
                />
            </div>
        </div>
    )
}
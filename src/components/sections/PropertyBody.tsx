import { NavLink, useParams } from "react-router-dom"
import { ArrowLongLeft } from "../../assets/icons/ArrowLongLeft"
import { PropertyProps } from "../../types/PropertyProps"
import { PropertyBodyValues } from "../property/PropertyBodyValues"
import { controllerAtom } from "../../atoms"
import { useAtom } from "jotai"
import { CourseViewModel } from "../../view-models/CourseViewModel"
import { PropertyBodyExamples } from "../property/PropertyBodyExamples"

export const PropertyBody = ({ name, definition, category, values, examples}: PropertyProps) => {
    const { courseID } = useParams()
    const [controllerData] = useAtom(controllerAtom)
    const courseFound = controllerData.listCourses().find((course) => course.id === courseID)
    const courseFoundFormatted = (courseFound) ? CourseViewModel.viewCourse(courseFound) : {}

    const titles = generateTitles(name)

    return (
        <section className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% pt-20 pb-32 h-fit">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 w-11/12 md:w-10/12 lg:max-w-3xl xl:max-w-4xl items-center justify-center mx-auto relative">
                    <div className="absolute -top-20 left-0 w-full flex items-center">
                        <span className="border border-solid border-secondary/20 px-3 py-2 mx-auto rounded-md font-outifit text-[14px] font-semibold text-secondary flex items-center">
                            {category}
                        </span>
                    </div>
                    <div className="absolute top-1 left-0 w-auto h-8 flex justify-center items-center">
                        <NavLink to={`/courses/${courseID}`} state={{"course": courseFoundFormatted}} className="flex items-center gap-4 group">
                            <ArrowLongLeft classNames="w-6 h-6 text-secondary hover:text-primary cursor-pointer" />
                            <span className="font-outfit text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">Voltar para o curso</span>
                        </NavLink>
                    </div>
                    <h2 className="font-outfit text-3xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                        {name}
                    </h2>
                    <p className="font-outfit text-base font-normal leading-8 text-body-100 text-center mb-10">
                        {definition}
                    </p>
                    <h3 className="font-outfit text-2xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                        {titles.values}
                    </h3>
                    <PropertyBodyValues values={values} />
                    <div className="w-full">
                        <h3 className="font-outfit text-2xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                            {titles.examples}
                        </h3>
                        <PropertyBodyExamples 
                            name={name} 
                            examples={examples}
                        />
                    </div>
                    <div className="propertyBody-ended relative w-full">
                        <div className="absolute top-1 left-0 w-auto h-8 flex justify-center items-center">
                            <NavLink to={`/courses/${courseID}`} state={{"course": courseFoundFormatted}} className="flex items-center gap-4 group">
                                <ArrowLongLeft classNames="w-6 h-6 text-secondary hover:text-primary cursor-pointer" />
                                <span className="font-outfit text-sm text-primary">Voltar para o curso</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function generateTitles(name: string) {
    return {
        name: `Propriedade ${name}`,
        values: `Values`,
        examples:`Examples`
    }
}
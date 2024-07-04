import { CourseProps } from "../../types/CourseProps"
import { CourseArea } from "../courses/CourseArea"
import { CourseHero } from "../courses/CourseHero"
import { CourseModules } from "../courses/CourseModules"

export const CoursesInfo = ({ id, category, author, modules, info }: CourseProps) => {
    
    return (
        <section className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% pt-20 pb-32 h-fit">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-[8fr_4fr] gap-10 px-2 sm:p-4 lg:px-8">
                    <div className="courses-main">
                        <CourseHero 
                            courseName={info.courseName}
                            category={category}
                            resume={info.resume}
                            author={author}
                            lastUpdate={"8 meses atrás"}
                        />
                        <CourseInfoBody 
                            heading="Descrição do curso: "
                            info={info}
                        />
                        <CourseInfoCurriculum 
                            heading="Currículo do curso"
                            description={info.curriculumDesc}
                        />
                        <CourseModules 
                            heading="Módulos"
                            modules={modules}
                            courseID={id}
                        />
                    </div>
                    <CourseArea 
                        heading="Informações: "
                        numberModules={modules.length}
                    />
                </div>
            </div>
        </section>
    )
}

type CourseHeroBodyProps = {
    heading: string
    info: CourseProps['info']
}
export const CourseInfoBody = ({ heading, info }: CourseHeroBodyProps) => {
    return (
        <div className="flex flex-col gap-[10px] pt-2">
            <h2 className="font-outfit font-semibold text-[28px] text-secondary leading-10">{heading}</h2>
            <p className="font-outfit text-base font-normal text-body-100 leading-7 mb-4">{info.body.first}</p>
            <p className="font-outfit text-base font-normal text-body-100 leading-7 mb-1">{info.body.second}</p>
        </div>
    )
}

export const CourseInfoCurriculum = ({ heading, description }: { heading: string, description: string }) => {
    return (
        <div className="flex flex-col gap-[10px] pt-8">
            <h2 className="font-outfit font-semibold text-[28px] text-secondary leading-10">{heading}</h2>
            <p className="font-outfit text-base font-normal text-body-100 leading-7 mb-5">{description}</p>
        </div>
    )
}

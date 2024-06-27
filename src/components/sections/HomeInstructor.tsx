import { repositoryHomeExploreUtils } from "../../core/utils/HomeExploreUtil"
import { SubsectionHero } from "../utils/SubsectionHero"

export const HomeInstructor = () => {
    const homeInstructorData = repositoryHomeExploreUtils['homeInstructor']
    return (
        <section className="w-full bg-white h-auto py-32">
            <div className="container mx-auto">
                <div className="w-11/12 mx-auto lg:w-11/12 xl:w-full sm:w-full flex flex-col-reverse lg:flex-row gap-6 gap-y-14 sm:gap-10 md:items-center max-w-6xl">
                    <SubsectionHero 
                        subtitle={homeInstructorData.subtitle}
                        title={homeInstructorData.title}
                        text={homeInstructorData.text}
                        button={homeInstructorData.button}
                    />
                    <img src="/become-instructor.png" 
                        alt="Illustration of a teacher teaching a student (Ilustração de um professor ensinando um aluno)"
                        className="w-full" />
                </div>
            </div>
        </section>
    )
}
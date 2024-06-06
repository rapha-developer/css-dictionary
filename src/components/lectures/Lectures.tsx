import { useParams } from "react-router-dom";
import { paramsToLazyRoutes } from "../../types/paramsToLazyRoutes.ts";
import { paramsToBuildRoute } from "../../utils/paramsToBuildRoute.tsx";
import { RunPropertyInfoDynamically } from "../../lecture/RunPropertyDynamically.ts";
import { LectureContent } from "./LectureContent.tsx";

export const Lectures = () => {
    const params = useParams<paramsToLazyRoutes>()
    const { firstLetter, propertyClassName, propertyName } = paramsToBuildRoute(params)    
    const getPropertyInfoDynamically = new RunPropertyInfoDynamically(firstLetter)
    const getSpecificProperty = new (getPropertyInfoDynamically.getProperty(propertyClassName))();
    
    return (
        <section className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% pt-20 pb-32 h-fit">
            <div className="container mx-auto">
                {getSpecificProperty && 
                    <LectureContent 
                        name={propertyName} 
                        definition={getSpecificProperty.showDefinition()}
                        values={getSpecificProperty.showValues()}
                        examples={getSpecificProperty.showExamples()}
                    />
                }
            </div>
        </section>
    )
}



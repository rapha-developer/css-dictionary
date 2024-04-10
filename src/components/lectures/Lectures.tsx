import React, { Suspense } from "react"
import { Loading } from "../loading/Loading.tsx"
import { useParams } from "react-router-dom";
import { paramsToLazyRoutes } from "../../types/paramsToLazyRoutes.ts";
import { paramsToBuildRoute } from "../../utils/paramsToBuildRoute.tsx";

export const Lectures = () => {
    const params = useParams<paramsToLazyRoutes>()
    const { firstLetter, componentName } = paramsToBuildRoute(params)    
    const LectureContent = React.lazy(() => import(`../../lecture/${firstLetter}/${componentName}.tsx`));
    
    return (
        <section className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% pt-20 pb-32 h-fit">
            <div className="container mx-auto">
                <Suspense fallback={<Loading />}>
                    <LectureContent />
                </Suspense>
            </div>
        </section>
    )
}



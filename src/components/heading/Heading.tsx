import { widgetBreadCrumb } from "../../types/widgetBreadCrumb"
import { BackgroundHeading } from "./BackgroundHeading"
import { HeadingHero } from "./HeadingHero"


export const Heading = ({ actual, historic }: widgetBreadCrumb ) => {
    
    return (
        <div className="bg-transparent w-full h-auto">
            <div className="h-[500px] relative">
                <BackgroundHeading />
                <HeadingHero 
                    historic={historic} 
                    actual={actual}
                />
            </div>
        </div>
    )
}
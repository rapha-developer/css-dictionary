import { widgetBreadCrumb } from "../../types/widgetBreadCrumb"
import { WidgetBreadCrumbs } from "../widgets/WidgetBreadCrumbs"
import { HeadingTitle } from "./HeadingTitle"


export const HeadingHero = ({ actual, historic }: widgetBreadCrumb ) => {
    return (
        <div className="container mx-auto pt-36 pb-7">
            <div className="flex flex-col gap-4 w-full items-center justify-center">
                <WidgetBreadCrumbs 
                    historic={historic} 
                    actual={actual}
                />
                <HeadingTitle text={actual.text} />
            </div>
        </div>
    )
}
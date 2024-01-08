import { AcademicCapIcon, BookOpenIcon, FoundationIcon, NewspaperIcon, SquareIcon } from "../../assets/icons"
import { iconTypeLabels } from "../../data"
import { WidgetElement } from "../../types/widgetElement"

export const WidgetHeroElement = ( { heading, description, iconColor, iconType, url }: WidgetElement) => {
    return (
        <a href={url} className="w-full sm:w-auto">
            <div className="bg-grey-100 py-4 px-4  sm:px-5 flex items-center gap-4 rounded-2mxl group transition-colors hover:bg-secondary">
                <div className={`bg-icon-widget bg-icon-widget-${iconColor} rounded-full flex items-center justify-center box-shadow-widget-icon`}>
                    {iconType === iconTypeLabels.foundation && <FoundationIcon />}
                    {iconType === iconTypeLabels.book && <BookOpenIcon />}
                    {iconType === iconTypeLabels.academic && <AcademicCapIcon />}
                    {iconType === iconTypeLabels.square && <SquareIcon />}
                    {iconType === iconTypeLabels.news && <NewspaperIcon />}
                </div>
                <div className="widgetElement-content grid gap-1">
                    <h3 className="font-outfit font-semibold text-secondary text-xl leading-snug capitalize group-hover:text-white">{heading}</h3>
                    <p className="font-outfit font-normal text-body-100 text-base capitalize group-hover:text-white">{description}</p>
                </div>
            </div>
        </a>
    )
}
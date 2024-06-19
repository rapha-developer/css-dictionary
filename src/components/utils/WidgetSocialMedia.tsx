import { BehanceIcon } from "../../assets/icons/BehanceIcon"
import { CodepenIcon } from "../../assets/icons/CodepenIcon"
import { GithubIcon } from "../../assets/icons/GithubIcon"
import { NewspaperIcon } from "../../assets/icons/NewsPaper"
import { RocketIcon } from "../../assets/icons/RocketIcon"
import { repositorySocialMediaUtils, socialMediaUtilProps } from "../../core/utils/SocialMediaUtil"

export const WidgetSocialMedia = () => {
    const items = repositorySocialMediaUtils
    return (
        <div className="w-fit mx-auto bg-white py-7 px-3 sm:px-7 flex flex-wrap justify-center gap-6 -mt-20 sm:-mt-32 md:-mt-20 rounded-2mxl box-shadow-widget relative z-20">
            {Array.isArray(items) &&
            items.length > 0 &&
            items.map((item) => (
                <WidgetSocialMediaItem 
                    heading={item.heading}
                    description={item.description}
                    iconName={item.iconName}
                    iconColor={item.iconColor}
                    url={item.url}
                />
            ))
            }
        </div>
    )
}

export const WidgetSocialMediaItem = ( { heading, description, iconColor, iconName, url }: socialMediaUtilProps) => {
    return (
        <a href={url} className="w-full sm:w-auto" target="_blank">
            <div className="bg-grey-100 py-4 px-4  sm:px-5 flex items-center gap-4 rounded-2mxl group transition-colors hover:bg-secondary">
                <SocialMediaItemIcon  iconColor={iconColor} iconName={iconName} />
                <div className="widgetElement-content grid gap-1">
                    <h3 className="font-outfit font-semibold text-secondary text-xl leading-snug capitalize group-hover:text-white">{heading}</h3>
                    <p className="font-outfit font-normal text-body-100 text-base capitalize group-hover:text-white">{description}</p>
                </div>
            </div>
        </a>
    )
}
export const SocialMediaItemIcon = ({ iconName, iconColor }: { iconColor: socialMediaUtilProps['iconColor'], iconName: socialMediaUtilProps['iconName'] }) => {
    return (
        <div className={`bg-icon-widget bg-icon-widget-${iconColor} rounded-full flex items-center justify-center box-shadow-widget-icon`}>
            {(iconName === "rocket") && <RocketIcon classNames="w-8 h-8 text-white" />}
            {(iconName === "codepen") && <CodepenIcon classNames="w-8 h-8 text-white" />}
            {(iconName === "behance") && <BehanceIcon classNames="w-8 h-8 text-white" />}
            {(iconName === "github") && <GithubIcon classNames="w-8 h-8 text-white" />}
            {(iconName === "news") && <NewspaperIcon classNames="w-8 h-8 text-white" />}
        </div>
    )
}
import { CodesIcon } from "../../assets/icons/CodesIcon"
import { MapPinIcon } from "../../assets/icons/MapIcon"
import { FooterUtilProps } from "../../core/utils/FooterUtil"
import { FooterText } from "./FooterText"

export const FooterAbout = ({ title, text, address, languages }: FooterUtilProps['about']) => {
    return (
        <div className="footer-about flex flex-col gap-5">
            <FooterText 
                title={title}
                text={text}
            />
            <FooterAboutProfile 
                address={address}
                languages={languages}
            />
        </div>
    )
}
export const FooterAboutProfile = ({ address, languages }: { address: string, languages: string[] }) => {
    return (
        <div className="footer-profile flex flex-col gap-5">
            <div className="flex gap-2 items-center">
                <MapPinIcon classNames="w-6 h-6 text-white" />
                <p className="font-outfit text-base text-tertiary font-normal capitalize">{address}</p>
            </div>
            <div className="flex gap-2 items-center">
                <CodesIcon classNames="w-6 h-6 text-white" />
                <p className="font-outfit text-base text-tertiary font-normal capitalize">
                    {languages.reduce((languageACC, language) => `${languageACC}, ${language}`)}
                </p>
            </div>
        </div>
    )
}
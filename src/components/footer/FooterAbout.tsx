import { footerProfileData } from "../../data/FooterColumnsData"
import { FooterHeading } from "../../types/footerHeading"
import { FooterProfile } from "./FooterProfile"
import { FooterText } from "./FooterText"


export const FooterAbout = ({ title, text }: FooterHeading) => {

    return (
        <div className="footer-about flex flex-col gap-5">
            <FooterText 
                title={title}
                text={text}
            />
            <FooterProfile 
                address={footerProfileData.address}
                languages={footerProfileData.languages}
            />
        </div>
    )
}
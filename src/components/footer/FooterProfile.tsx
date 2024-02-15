import { CodesIcon } from "../../assets/icons/CodesIcon"
import { MapPinIcon } from "../../assets/icons/MapPinIcon"
import { FooterProfileInfo } from "../../types/footerProfileInfo"

export const FooterProfile = ({ address, languages }: FooterProfileInfo) => {
    return (
        <div className="footer-profile flex flex-col gap-5">
            <div className="flex gap-2 items-center">
                <MapPinIcon />
                <p className="font-outfit text-base text-tertiary font-normal capitalize">{address}</p>
            </div>
            <div className="flex gap-2 items-center">
                <CodesIcon />
                <p className="font-outfit text-base text-tertiary font-normal capitalize">{languages}</p>
            </div>
        </div>
    )
}


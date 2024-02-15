import { FooterFirstMenu, FooterSecondMenu, footerAboutData, footerCopyrightData, footerNewsData } from "../../data/FooterColumnsData"
import { FooterColumn } from "./FooterColumn"
import { FooterCopyright } from "./FooterCopyright"
import { FooterAbout } from "./FooterAbout"
import { FooterNews } from "./FooterNews"

export const Footer = () => {

    return (
        <footer className="w-full bg-[#110e19] min-h-[500px]">
            <div className="container mx-auto">
                <div className="w-11/12 mx-auto xl:w-full xl:mx-0 px-2 lg:px-0 pt-20">
                    <div className="flex flex-wrap justify-between gap-6 gap-y-8 xl:gap-0 xl:justify-around items-baseline pb-16">
                        <FooterAbout 
                            title={footerAboutData.title}
                            text={footerAboutData.text}
                        />
                        <FooterColumn 
                            title={FooterFirstMenu.title}
                            menu={FooterFirstMenu.menu}
                        />
                        <FooterColumn 
                            title={FooterSecondMenu.title}
                            menu={FooterSecondMenu.menu}
                        />
                        <FooterNews 
                            title={footerNewsData.title}
                            text={footerNewsData.text}
                        />
                    </div>
                    <FooterCopyright
                        text={footerCopyrightData.text}
                    />
                </div>
            </div>
        </footer>
    )
}
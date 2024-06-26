import { FooterAbout } from "./FooterAbout"
import { FooterColumn } from "./FooterColumn"
import { FooterCopyright } from "./FooterCopyright"
import { FooterNews } from "./FooterNews"
import { repositoryFooterUtil } from "../../core/utils/FooterUtil"

export const Footer = () => {
    const footer = repositoryFooterUtil.footer
    return (
        <footer className="w-full bg-[#110e19] min-h-[500px]">
            <div className="container mx-auto">
                <div className="w-11/12 mx-auto xl:w-full xl:mx-0 px-2 lg:px-0 pt-20">
                    <div className="flex flex-wrap justify-between gap-6 gap-y-8 xl:gap-0 xl:justify-around items-baseline pb-16">
                        <FooterAbout 
                            title={footer.about.title}
                            text={footer.about.text}
                            address={footer.about.address}
                            languages={footer.about.languages}
                        />
                        {Array.isArray(footer?.columns) &&
                        footer?.columns.length > 0 &&
                        footer.columns.map((column) => (
                            <FooterColumn 
                                key={column.id}
                                title={column.title}
                                items={column.items}
                            />
                        ))
                        }
                        <FooterNews 
                            news={footer.news}
                        />
                    </div>
                    <FooterCopyright
                        text={footer.copyright}
                    />
                </div>
            </div>
        </footer>
    )
}
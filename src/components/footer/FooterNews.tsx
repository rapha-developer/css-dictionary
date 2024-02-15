import { footerFormData } from "../../data/FooterColumnsData"
import { FooterHeading } from "../../types/footerHeading"
import { FooterText } from "./FooterText"


export const FooterNews = ({ title, text }: FooterHeading) => {
    const formData = footerFormData
    return (
        <div className="flex flex-col">
            <FooterText 
                title={title}
                text={text}
            />
            <form action="#" 
            
                className="border border-solid border-[#2e2b37] rounded-md mt-4 p-2 flex flex-col md:flex-row gap-2">
                <input type={formData.form.type}
                    placeholder={formData.form.placeholder}
                className="bg-transparent font-outfit text-base text-tertiary px-3 py-1 focus:outline-none" />
                <button className="font-outfit rounded-[5px] text-lg font-medium text-white bg-primary px-4 py-2 capitalize transition-colors hover:bg-secondary">{formData.button.text}</button>
            </form>
            <p className="font-outfit text-base text-tertiary font-normal leading-7 capitalize mt-4">{formData.footerText}</p>
        </div>
    )
}
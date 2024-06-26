import { FooterUtilProps } from "../../core/utils/FooterUtil"
import { FooterText } from "./FooterText"

export const FooterNews = ({ news }: { news: FooterUtilProps['news']}) => {
    const { text, title, warning  } = news
    return (
        <div className="flex flex-col">
            <FooterText 
                title={title}
                text={text}
            />
            <form action="#" 
                className="border border-solid border-[#2e2b37] rounded-md mt-4 p-2 flex flex-col md:flex-row gap-2">
                <input type="email"
                    placeholder="Seu email here.."
                className="bg-transparent font-outfit text-base text-tertiary px-3 py-1 focus:outline-none" />
                <button className="font-outfit rounded-[5px] text-lg font-medium text-white bg-primary px-4 py-2 capitalize transition-colors hover:bg-secondary">sign up</button>
            </form>
            <p className="font-outfit text-base text-tertiary font-normal leading-7 capitalize mt-4">{warning}</p>
        </div>
    )
}
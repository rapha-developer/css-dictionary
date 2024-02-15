import { Logo } from "../logo"


export const FooterCopyright = ({ text }: {text: string}) => {
    return (
        <div className="border-t-[1px] border-solid border-[#27242f] py-4 w-full mx-auto flex flex-col gap-y-4 md:gap-y-0 md:flex-row items-center justify-between">
            <div className="text-white">
                <Logo title="CSS dictionary" />
            </div>
            <p className="font-outfit text-base text-tertiary text-right">{text}</p>
        </div>
    )
}

type Props = {
    title: string
}
export const Logo = ({ title }: Props) => {
    return (
        <div className="logo flex gap-2 items-center">
            <img src="/css-logo-icon.svg" 
                alt="Academic Cap" 
                className="w-10 h-10" />
            <p className="font-outfit text-base font-semibold text-inherit capitalize">{title}</p>
        </div>
    )
}
type Props = {
    text: string
}
export const HeroSubtitle = ({ text }: Props) => {
    return (
        <p className="font-outfit text-sm font-medium tracking-[0.6px] leading-snug text-white uppercase mb-1">{text}</p>
    )
}
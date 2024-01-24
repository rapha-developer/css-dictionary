
type Props = {
    text: string
}
export const HeroTitle = ({ text }: Props) => {
    return (
        <h1 className="font-outfit text-3xl lg:text-6xl font-semibold leading-snug text-white max-w-[644px] capitalize">{text}</h1>
    )
}